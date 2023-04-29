const Joi=require("joi")
const esquema= Joi.object({
    name:Joi.string().required(),
    description:Joi.string() ,
    availableUnits: Joi.number().required(),
    price:Joi.number().required ,
    category:Joi.string().required(),

})

const validacionesquema=(req,res,next)=>{
    const{error}=esquema.validate(req.body)
    if (error) {
        res.status(422).send(error)
    } else {
        next()
    }
}

module.exports=validacionesquema