const mongoose = require('mongoose');
require('dotenv').config();

class DBConnection {
    static async open() {
        if (this.db) return this.db;
        try {
            console.log('Connected to MongoDB!');
        } catch (err) {
            console.log(`Error connecting to database: ${err}`)
        }
        this.db = await mongoose.connect(process.env.MONGODB_URI);
        return this.db;
    }
}

module.exports = { DBConnection }