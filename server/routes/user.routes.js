const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.get('/list', function(req, res) {
    /* List users. */
})

.get('/', UserController.getUser)

.delete('/:id', function(req, res) {
    /* Delete the user with the given id. */
})

.patch('/', UserController.updateUser);

module.exports = router;