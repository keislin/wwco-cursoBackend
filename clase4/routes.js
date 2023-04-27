const { Router } = require("express");
const Product=require("./models")
const routes = new Router();

const base = "/api/v1/products";

routes.get(base, async (req, res) => {
    try {
        const productsLit = await Product.find();
        res.status(200).json(productsLit);

    } catch (error) {
        res.status(500).send(error)

    }
})

routes.post(base, async (req, res) => {
    try {
        const producto=req.body
        const productonuevo=new Product(producto)
        await Product.save()
        res.status(201).json(productonuevo);

    } catch (error) {
        res.status(500).send(error)
        console.log(error)

    }
})


module.exports = routes;