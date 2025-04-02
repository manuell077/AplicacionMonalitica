import express from "express";
import CategoriaController  from "../controller/categoriaController.js";
import {validarCategoria} from "../middlewares/validarCategoria.js"

const router= express.Router();

router.get('/',CategoriaController.getAllCategorias)
router.post('/', validarCategoria,   CategoriaController.postCategorias)   
router.put('/:id',CategoriaController.actualizarCategoria) 
router.patch('/:id',CategoriaController.actualizarParcialmente)
   
router.put('/:id',(req,res)=>{
       console.log(req.body)
   })

export default router;   