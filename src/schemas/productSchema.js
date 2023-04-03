import joi from "joi"

const productSchema = joi.object({
    name: joi.string().required(),
    qtt: joi.number().required(),
    image: joi.string().required(),
    desc: joi.string()
})

export default productSchema;