const express = require('express')
const asyncHandler = require('express-async-handler')
const { handleValidationErrors } = require('../../utils/validation')
const { check } = require('express-validator')
const { Comment, User, Episode } = require('../../db/models')

const router = express.Router()

const commentValidator = [
    check('comment')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a comment.')
        .isLength({ max: 110 })
        .withMessage('Comments cannot exceed 110 characters.'),
    handleValidationErrors
]


router.get('/', asyncHandler(async (req, res) => {
    const allComments = await Comment.findAll({
        include: [Episode, User],
        order: [['createdAt', 'DESC']]
    })

    res.json({ allComments })
}))

router.post('/', commentValidator, asyncHandler(async (req, res) => {
    const newComment = await Comment.create(req.body)
    return res.json(newComment)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    const comment = await Comment.findByPk(id)
    res.json(comment)
    await comment.destroy()
    return
}))

module.exports = router
