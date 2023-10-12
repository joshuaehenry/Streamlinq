const express = require('express');
const router = express.Router();

router.get('/list', function(req, res) {
    /* List users. */
})

.get('/:id', function(req, res) {
    /* Get user by id. */
})

.patch('/:id', function(req, res) {
    /* Update user with the given id. */
})

.delete('/:id', function(req, res) {
    /* Delete the user with the given id. */
})

.post('/new', function(req, res) {
    /* Create a new user. */
});

module.exports = router;