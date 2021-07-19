const express = require('express')
const asyncHandler = require('express-async-handler')
const { Podcast, Episode, User } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const allPodcasts = await Podcast.findAll({ include: User })

    res.json({ allPodcasts })
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params

    const podcast = await Podcast.findByPk(id)
    res.json({ podcast })
}))

router.get('/episodes/:id', asyncHandler(async (req, res) => {
    const { id } = req.params

    const episode = await Episode.findOne({
        where: {
            id
        },
        include: Podcast
    })
    res.json({ episode })
}))

module.exports = router
