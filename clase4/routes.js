const { Router } = require("express");
const Product = require("./models");
const validacionesquema = require("./middlewares");
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

routes.get(`${base}/:id`, async (req, res) => {
    try {
        const productId = await Product.findById(req.params.id)
        res.status(200).json(productId);

    } catch (error) {
        res.status(500).send(error)

    }
})

routes.post(base, validacionesquema,async (req, res) => {
    try {

        const productonuevo = await new Product(req.body).save()
        res.status(201).json(productonuevo);

    } catch (error) {
        res.status(500).send(error)
        console.log(error)

    }
})

routes.patch(`${base}/:id`, async (req, res) => {
    try {

        const productoactualizado = await Product.findByIdAndUpdate(req.params.id,req.body,{returnDocument:"after"})
        res.status(200).json(productoactualizado);

    } catch (error) {
        res.status(500).send(error)
        console.log(error)

    }
})

routes.delete(`${base}/:id`, async (req, res) => {
    try {

        const productoeliminado = await Product.findOneAndDelete(req.params.id)
        res.status(200).json(productoeliminado);

    } catch (error) {
        res.status(500).send(error)
        console.log(error)

    }
})


module.exports = routes;