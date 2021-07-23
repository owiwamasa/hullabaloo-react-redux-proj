const express = require('express')
const asyncHandler = require('express-async-handler')
const { Comment, User, Episode } = require('../../db/models')

const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
    const allComments = await Comment.findAll({
        include: [Episode, User],
        order: [['createdAt', 'DESC']]
    })

    res.json({ allComments })
}))

router.post('/', asyncHandler(async (req, res) => {
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
