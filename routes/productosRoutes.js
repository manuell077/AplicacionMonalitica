import express from "express";
import ProductosController  from "../controller/ProductosController.js";

const router= express.Router();

router.get('/',ProductosController.getAllProductos)
router.post('/',ProductosController.postAllproductos)    
router.put('/:id',ProductosController.actualizarProducto) 
router.patch('/:id',ProductosController.actualizarParcialmente)
router.delete('/:id',ProductosController.eliminarRegistro)
   
router.put('/:id',(req,res)=>{
       console.log(req.body)
   })

export default router;   