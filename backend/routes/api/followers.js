const express = require('express')
const asyncHandler = require('express-async-handler')
const { Podcast, Follower } = require('../../db/models')


const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const allFollowers = await Follower.findAll({ include: Podcast })
    return res.json({ allFollowers })
}))

router.post('/', asyncHandler(async (req, res) => {
    const follower = await Follower.create(req.body)
    return res.json(follower)
}))








module.exports = router
