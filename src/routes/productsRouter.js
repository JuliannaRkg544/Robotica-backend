import {Router} from "express";
import { addProduct, deleteProduct, getProduct, updateProductLess, updateProductPlus } from "../controllers/addProduct.js";
import { productMiddleware } from "../middlewares/productMiddleware.js";


const productsRouter = Router()

productsRouter.post("/add-product", productMiddleware, addProduct)
productsRouter.patch("/product-plus/:id", updateProductPlus)
productsRouter.patch("/product-less/:id", updateProductLess)
productsRouter.get("/get-product", getProduct)
productsRouter.delete("/delete/:id" ,deleteProduct)

export default productsRouter;