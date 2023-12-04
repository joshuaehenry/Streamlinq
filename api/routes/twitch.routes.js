const express = require('express');
const router = express.Router();
const TwitchController = require('../controllers/twitch.controller');

router.get('/list', TwitchController.getList);
router.get('/search', TwitchController.getStream);

module.exports = router;