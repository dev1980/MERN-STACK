const mongoose = require("mongoose");

const Shoes = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    size: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    active: Boolean
})

module.exports = mongoose.model("shoes", Shoes)
