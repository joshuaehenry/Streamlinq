const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const { verifyToken } = require('../middleware/auth');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/logout', AuthController.logout, verifyToken);
module.exports = router;