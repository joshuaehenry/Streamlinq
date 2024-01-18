const express = require('express');
const router = express.Router();
const TwitchController = require('../controllers/twitch.controller');

router.get('/list', TwitchController.getSortedStreams);
router.get('/users', TwitchController.getStream);

module.exports = router;