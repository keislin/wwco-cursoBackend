//configuración express
const express = require("express");
const fs = require('fs');
const path = require('path');
const app = express()
const PORT = 3000
app.use(express.json())
const filepath = path.resolve(`${__dirname}/archivo.txt`)
console.log(filepath)


app.listen(PORT, () => {//colback
    console.log("la aplicación está corriendo en el puerto 3000")
});

app.get("/api/v1/products", async (req, res) => {
    try {
        const archivo = await fs.promises.readFile(filepath, "utf-8")
        const productos = JSON.parse(archivo)
        res.status(200).json({ productos })
        console.log(productos)

    } catch (error) {
        res.status(500).send(error)
    }


})

app.post("/api/v1/products", async (req, res) => {
    try {
        const nuevoProducto = req.body
        const archivo = await fs.promises.readFile(filepath, "utf-8")
        const productos = JSON.parse(archivo)
        productos.push(nuevoProducto)
        res.status(201).json({ nuevoProducto })
        fs.promises.writeFile(filepath, JSON.stringify(productos))

    } catch (error) {
        res.status(500).send(error)
    }


})

app.delete("/api/v1/products/:id", async (req, res) => {
    try {
        const id = req.params.id
        const archivo = await fs.promises.readFile(filepath, "utf-8")
        const productos = JSON.parse(archivo)
        const productodelete = productos.filter(producto => producto.id != id)
        fs.promises.writeFile(filepath, JSON.stringify(productodelete))
        res.status(200).json({ success: "producto eliminado exitosamente", id })

    } catch (error) {
        res.status(500).send(error)
    }


})

app.patch("/api/v1/products/:id", async (req, res) => {
    try {
        console.log(req.body)
        const id = req.params.id
        const archivo = await fs.promises.readFile(filepath, "utf-8")
        const productos = JSON.parse(archivo)
        const productoupdate = productos.find(producto => producto.id == id)
        productoupdate.id = req.params.id
        productoupdate.name = req.body.name
        productoupdate.description = req.body.description
        productoupdate.price = req.body.price
        productoupdate.quantity = req.body.quantity
        productoupdate.category = req.body.category
        fs.promises.writeFile(filepath, JSON.stringify(productos))
        res.status(200).json({ success: "producto actualizado exitosamente", productoupdate })

    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }


})


