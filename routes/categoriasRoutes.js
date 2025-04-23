import express from "express";
import CategoriaController  from "../controller/CategoriaController.js";
import {validarCategoria} from "../middlewares/validarCategoria.js"

const router= express.Router();

router.get('/',CategoriaController.getAllCategorias)
router.get('/:id',CategoriaController.getCategoria)
router.post('/', validarCategoria,   CategoriaController.postCategorias)   
router.put('/:id',CategoriaController.actualizarCategoria) 
router.patch('/:id',CategoriaController.actualizarParcialmente)
router.delete('/:id',CategoriaController.eliminarRegistro)
   
router.put('/:id',(req,res)=>{
       console.log(req.body)
   })

export default router;   