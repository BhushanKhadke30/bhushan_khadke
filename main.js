import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { Menu } from "./models/fooditem.js"

let connect = await mongoose.connect("mongodb://localhost:27017/SmartKitchen")

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/api/menu', async (req, res) => {
  const { SrNo, foodname, price } = req.body
  const menu = new Menu({ SrNo, foodname, price })
  const saved = await menu.save()
  res.json(saved)
})

app.get('/api/menu', async (req, res) => {
  const items = await Menu.find()
  res.json(items)
})




app.put('/api/menu/:id', async (req, res) => {
  const updated = await Menu.findByIdAndUpdate(
    req.params.id,
    req.body,      // price असो किंवा foodname, जे पाठवाल ते update होईल
    { new: true }
  )
  res.json(updated)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})