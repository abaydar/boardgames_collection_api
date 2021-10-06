const mongoose = require('mongoose')

const boardgameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    yearPublished: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    minPlayers: {
        type: Number,
        required: true
    },
    maxPlayers: {
        type: Number,
        required: true
    },
    playingTime: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Boardgame", boardgameSchema)