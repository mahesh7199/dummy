const mongoose = require("mongoose")

// collection schema for mongodb

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: String,
        required: true
    },
    image: String
})

module.exports = mongoose.model('product',productSchema);