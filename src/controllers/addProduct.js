import db from "../../db.js";

export async function addProduct(req, res){
    const {name, qtt, image, desc} = req.body;
    try {
       await db.query(`INSERT INTO products ("name", "qtt", "image", "desc") VALUES ($1, $2, $3, $4)`, [name, qtt, image, desc])
       res.sendStatus(200)
        
      } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
      }
    }

export async function getProduct(req,res){
  let product;
  try {
    product = await db.query(`SELECT * FROM products`)
   res.status(200).send(product.rows)
    
  } catch(error){
    console.log(error)
    res.sendStatus(500)
    return
  }

}
export async function deleteProduct(req, res){
//irá deletar pelo id pq  n fiz variavel que é unica
  const id = parseInt(req.params.id)
  console.log("olha o id",id)
  try {
    await db.query(`DELETE FROM products WHERE id = $1`, [id])
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
    return
    
  }
}

export async function updateProductPlus(req, res){
  const id = parseInt(req.params.id)
  try {
    await db.query(`UPDATE products SET qtt = qtt+1 WHERE id = $1`, [id])
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
    return
  }
}

export async function updateProductLess(req, res){
  const id = parseInt(req.params.id)
  try {
    await db.query(`UPDATE products SET qtt = qtt-1 WHERE id = $1`, [id])
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
    return
  }
}