const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const shoopingCart = [];
const products = [
    {
        id: "20180306",
        productName: "samsung A70",
        category: "phone"

    },
    {
        id: "20180302",
        productName: "iphone 12 pro max",
        category: "phone"
    },
    {
        id: "20180452",
        productName: "iphone 12 ",
        category: "phone"
    }
]


app.use(bodyParser.json());

// retrive all products
app.get("/products", (req, res) => {
    res.json(products)
})
// retrive product by ID 
app.get("/products/:id", (req, res) => {
    res.json(products.filter(el => el.id === req.params.id))
})
// add new product
app.post("/products", (req, res) => {
    products.push(res.body)
    res.send(products)
})
// add product to shopping cart 
app.post("/products/shoppingCart", (req, res) => {
    shoopingCart.push(products.filter(el => el.id === req.params.id))
    res.send(shoopingCart)
})

app.listen(3200, () => {
    console.log("Server running....");
})





















