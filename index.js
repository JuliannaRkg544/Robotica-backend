import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"
import productsRouter from "./src/routes/productsRouter.js"

const server = express()

dotenv.config()

server.use(cors())
server.use(json())
server.use(productsRouter)

server.listen(process.env.PORT, ()=>{
    console.log("servidor no ar")
})
