const express = require('express')
const asyncHandler = require('express-async-handler')
const { Podcast, User, Episode } = require('../../db/models')
const { handleValidationErrors } = require('../../utils/validation')
const { check } = require('express-validator')

const router = express.Router()

const validatePodcast = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a podcast name.')
        .isLength({ min: 4 })
        .withMessage('Please provide a podcast name with at least 4 characters.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description.'),
    check('imageUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a podcast image.'),
    handleValidationErrors
]

router.get('/', asyncHandler(async (req, res) => {
    const allPodcasts = await Podcast.findAll({
        include: User,
        order: [['totalPlays', 'DESC']]
    })
    res.json({ allPodcasts })
}))

router.post('/', validatePodcast, asyncHandler(async (req, res) => {
    const newPodcast = await Podcast.create(req.body)
    return res.json(newPodcast)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params

    const podcast = await Podcast.findByPk(id)
    res.json({ podcast })
}))

router.put('/:id', validatePodcast, asyncHandler(async (req, res) => {
    const { id } = req.params
    const podcast = await Podcast.findByPk(id)
    podcast.name = req.body.name
    podcast.description = req.body.description
    podcast.imageUrl = req.body.imageUrl
    podcast.totalPlays = req.body.totalPlays
    await podcast.save()
    return res.json({ podcast })
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    const podcast = await Podcast.findByPk(id)
    const episodes = await Episode.findAll({ where: { podcastId: id } })
    res.json(podcast)
    if (episodes.length > 0) {
        episodes.forEach(async episode => {
            await episode.destroy()
        })
    }
    await podcast.destroy()
    return
}))

module.exports = router
