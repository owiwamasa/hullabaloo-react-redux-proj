const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const podcastsRouter = require('./podcasts.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/podcasts', podcastsRouter)

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
