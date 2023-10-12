const express = require('express');
const router = express.Router();

router.get('/list', function(req, res) {
    /* List streamers. */
})

.get('/:id', function(req, res) {
    /* Get streamer by id. */
})

.patch('/:id', function(req, res) {
    /* Update streamer with the given id. */
})

.delete('/:id', function(req, res) {
    /* Delete the streamer with the given id. */
})

.post('/new', function(req, res) {
    /* Create a new streamer. */
});

module.exports = router;