const express = require('express')
const asyncHandler = require('express-async-handler')
const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')

const { setCookie, requireAuth, setTokenCookie } = require('../../utils/auth')
const { User, Podcast, Episode } = require('../../db/models')

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a username.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
]

router.get('/', asyncHandler(async (req, res) => {
    const allUsers = await User.findAll()

    return res.json({ allUsers })
}))

router.post('/', validateSignup, asyncHandler(async (req, res) => {
    let { email, password, username, profilePic } = req.body
    if (!profilePic) profilePic = 'https://i.imgur.com/N8RoYl1.png'
    const user = await User.signup({ email, username, password, profilePic })

    await setTokenCookie(res, user)

    return res.json({ user })
}))

router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    const { id } = req.params.id
    const user = await User.findByPk(id)
    const podcasts = await Podcast.findAll({
        where: {
            userId: user.id
        }
    })
    const episodes = await Episode.findAll({
        where: {
            userId: user.id
        }
    })
    return res.json({ user, podcasts, episodes })
}))

module.exports = router;
