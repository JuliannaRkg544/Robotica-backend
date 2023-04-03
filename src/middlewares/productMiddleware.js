import productSchema from "../schemas/productSchema.js"


export function productMiddleware(req,res,next){
    const product = req.body
    const validateProduct = productSchema.validate(product, {abortEarly: false})
    if (validateProduct.error){
        console.log(validateProduct.error.details)
        return res.status(422).send(validateProduct.error.message)
    }
    next()
}