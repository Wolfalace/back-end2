import express from "express"
import { json } from "stream/consumers"
import Categoria from "../models/categoria"

const routerCategorias = express.Router ()


routerCategorias.get('/categorias/:id' , (req, res) => {
const categoria: Categoria = {
    id: 1,
    nome: 'bares',
}
res.json(categoria)

})

export default routerCategorias
