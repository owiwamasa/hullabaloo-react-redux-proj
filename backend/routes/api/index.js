const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const podcastsRouter = require('./podcasts.js')
const episodesRouter = require('./episodes.js')
const followersRouter = require('./followers.js')
const commentsRouter = require('./comments.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/podcasts', podcastsRouter)
router.use('/episodes', episodesRouter)
router.use('/followers', followersRouter)
router.use('/comments', commentsRouter)

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
