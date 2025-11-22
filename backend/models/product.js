// Initializing Model Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Product Model Schema
const productSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

// Package Up and Export Model
const Product = mongoose.model("Product", productSchema);
module.exports = Product;