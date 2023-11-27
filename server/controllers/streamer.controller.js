const express = require('express');
const StreamerModel = require('../models/streamer.model');

const StreamerController = {
    getList: async (req, res) => {
        try {
            const data = await StreamerModel.find();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: `Server error: ${err}` });
        }
    },
    getById: async (req, res) => {
        
    },
    getByChannelName: async (req, res) => {

    },
    test: async (req, res) => {
        console.log('This is the post for streamer.');
    }
}

module.exports = StreamerController;