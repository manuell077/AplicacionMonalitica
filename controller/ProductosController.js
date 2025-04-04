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

    static actualizarProducto = async(req,res)=>{
        
        const {id} = req.params 
        const {nombre,descripcion,precio,categoria_id} = req.body;
       
        try{ 
           const objetoProducto = new Productos()
           const productos = await objetoProducto.update(nombre,descripcion,id,precio,categoria_id);
           res.json(productos);

        }catch(error){
            res.status(500).json({error:error.message})
        }
        
    }
    static actualizarParcialmente = async(req,res) =>{
        
        const {id} = req.params 
        const info = req.body;
        
        
            
        
        try{ 
           const objetoProductos = new Productos()
           const productos = await objetoProductos.updateParcial(id,info);
           res.json(productos);
        }catch(error){
            res.status(500).json({error:error.message})
        }

    }

    static eliminarRegistro = async(req,res) =>{
         
        const {id} = req.params;

        try{ 
            const objetoProducto = new Productos()
            const productos = await objetoProducto.delete(id);
            res.json(productos);
         }catch(error){
             res.status(500).json({error:error.message})
         }

    }







}

export default ProductosController;