const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.get('/list', (req, res) => {
    /* List users. */
})

.get('/', UserController.getUser)

.delete('/:id', (req, res) => {
    /* Delete the user with the given id. */
})

.patch('/', UserController.updateUser);

module.exports = router;