const express = require('express')
const asyncHandler = require('express-async-handler')
const { Podcast, Episode } = require('../../db/models')
const { handleValidationErrors } = require('../../utils/validation')
const { check } = require('express-validator')

const router = express.Router()

const validateEpisode = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a episode name.')
        .isLength({ min: 4 })
        .withMessage('Please provide a episode name with at least 4 characters.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description.'),
    check('imageUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a episode image.'),
    check('mp3file')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a mp3 file.'),
    handleValidationErrors
]

router.get('/', asyncHandler(async (req, res) => {
    const allEpisodes = await Episode.findAll({
        include: Podcast,
        order: [['totalPlays', 'DESC']]
    })

    res.json({ allEpisodes })
}))

router.post('/', validateEpisode, asyncHandler(async (req, res) => {
    const newEpisode = await Episode.create(req.body)
    return res.json(newEpisode)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params

    const episode = await Episode.findOne({
        where: {
            id
        },
        include: Podcast
    })
    res.json({ episode })
}))

router.put('/:id', validateEpisode, asyncHandler(async (req, res) => {
    const { id } = req.params
    const episode = await Episode.findByPk(id)
    episode.title = req.body.title
    episode.description = req.body.description
    episode.imageUrl = req.body.imageUrl
    episode.mp3file = req.body.mp3file
    episode.totalPlays = req.body.totalPlays
    await episode.save()
    return res.json({ episode })
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    const episode = await Episode.findByPk(id)
    res.json(episode)
    await episode.destroy()
    return
}))

module.exports = router
