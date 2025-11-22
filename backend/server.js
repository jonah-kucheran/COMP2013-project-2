// Server Initialization
const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const { DB_URI } = process.env;
const cors = require("cors");
const Product = require("./models/product");

// Middleware
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cors());

// Connection
mongoose.connect(DB_URI).then(() => {
    server.listen(port, () => {
        console.log(`Database Connected Successfully\nServer Listening on Port ${port}`);
    });
}).catch((error) => console.log(error.message));

// Routes
// Root Route
server.get("/", (request, response) => {
    response.send("Server is Live!");
});

// Get all Products
server.get("/products", async(request, response) => {
    try {
        const products = await Product.find();
        response.send(products);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

// Add New Product
server.post("/products", async (request, response) => {
    const { productName, brand, image, price } = request.body;
    const id = Math.floor(Math.random() * 100000000000000).toString();
    const newProduct = new Product({
        id,
        productName,
        brand,
        image,
        price,
    });
    try {
        await newProduct.save();
        response.status(200).send({ message: "Product added successfully!" });
    } catch (error) {
        response.status(400).send({ message: error.message });
    }
});

// Remove Existing Product
server.delete("/delete/:id", async (request, response) => {
    const { id } = request.params;
    try {
        await Product.findByIdAndDelete(id);
        response.status(200).send({ message: "Product deleted successfully!" });
    } catch (error) {
        response.status(400).send({ message: error.message });
        console.log(error.message);
    }
})