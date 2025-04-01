import Productos from "../Models/Productos.js";

class ProductosController{
    
    static getAllProductos = async(req,res)=>{
        const product = new Productos();
        const  productos = await product.getAll();
        res.json(productos)

    }

    static postProductos = async(req,res)=>{
       const {nombre,descripcion,precio,categoria_id} = req.body;
       try{
       const objproducto = new Productos(nombre,descripcion,precio,categoria_id);
       const envioProducto = await objproducto.post();
       res.status(201).json(envioProducto)
       }catch(error){
          res.status(500).json({error:error.message})

       }
       
       
       
    }
}

export default ProductosController;