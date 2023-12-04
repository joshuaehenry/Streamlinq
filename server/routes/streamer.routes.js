const express = require('express');
const router = express.Router();
const StreamerController = require('../controllers/streamer.controller');

router.get('/list', StreamerController.getList)

.get('/:id', function(req, res) {
    /* Get streamer by id. */
    res.send(`This is ID: ${req.params.id}`)
})

.patch('/:id', function(req, res) {
    /* Update streamer with the given id. */
})

.delete('/:id', function(req, res) {
    /* Delete the streamer with the given id. */
})

.post('/new', function(req, res) {
    /* Create a new streamer. */
})

.put('/', StreamerController.test);

module.exports = router;