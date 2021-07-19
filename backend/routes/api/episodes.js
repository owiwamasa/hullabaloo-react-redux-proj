const express = require('express')
const asyncHandler = require('express-async-handler')
const { Podcast, Episode } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const allEpisodes = await Episode.findAll({ include: Podcast })

    res.json({ allEpisodes })
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

module.exports = router
