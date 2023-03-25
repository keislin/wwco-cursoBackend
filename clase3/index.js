const express=require('express');
const PORT=3000
const app=express()
app.use(express.json());


const errorLogger=(err,req,res,next)=>{
    console.log(err);
    next(err)
}

const errorHnadler=(err,req,res,next)=>{
    res.status(400).json({
        messaje:err.message,
    })

}
app.use(errorLogger);
app.use(errorHnadler)

const products=[
    {
        id:1,
        name:"reloj",
        price:100,
        quantity:2
    },{
        id:2,
        name:"correa",
        price:100,
        quantity:3
    },{
        id:3,
        name:"sombrero",
        price:100,
        quantity:2
    }
]

app.get("/",(req,res)=>{

    res.send("mi primera app con express")
});
app.get("/api/v1/products",(req,res)=>{
    console.log(req,query);
    res.json(products);
});
app.listen(PORT,()=>{
    console.log(`escuchando en http://localhost:${PORT}`);
});
app.get("/api/v1/products/:productId",(req,res)=>{
    const {productId}=req.params;
    const productIdInt=parseInt(productId)
    const product=products.find((product)=>product.id===productIdInt);
    // console.log(productId);
    res.json(product);
});

app.post("/api/v1/products",(req,res)=>{ 
    const product=req.body;
    products.push(product);
    res.json(products);

});

