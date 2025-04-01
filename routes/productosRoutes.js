import express from "express";
import ProductosController  from "../controller/ProductosController.js";

const router= express.Router();

router.get('/',ProductosController.getAllProductos)
router.post('/',ProductosController.postProductos)    
   
router.put('/:id',(req,res)=>{
       console.log(req.body)
   })

export default router;   