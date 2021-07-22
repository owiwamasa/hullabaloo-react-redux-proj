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
    const newFollower = await Follower.findByPk(follower.id, { include: Podcast })
    return res.json(newFollower)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    const follower = await Follower.findByPk(id)
    res.json(follower)
    await follower.destroy()
    return
}))








module.exports = router
