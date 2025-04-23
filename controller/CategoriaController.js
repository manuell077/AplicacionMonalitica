import Categoria from "../Models/Categoria.js";
import CategoriasConProductos from "../servicios/CategoriasConProductos.js";
class CategoriaController{
    
    static getAllCategorias = async(req,res)=>{
        const objCategoria = new Categoria();
        const categorias = await objCategoria.getAll();
        res.json(categorias)

    }

    static getCategoria = async (req, res) => {
        const { id } = req.params;
        const objServicio = new CategoriasConProductos();
        const categoriasConProductos = await objServicio.getCategoriaWithProducto(id);
        res.json(categoriasConProductos);
      }


    static postCategorias = async(req,res)=>{
       const {nombre,descripcion} = req.body;
       try{
       const objCategoria = new Categoria(nombre,descripcion);
       const envio = await objCategoria.post(nombre,descripcion);
       res.status(201).json(envio)
       }catch(error){
          res.status(500).json({error:error.message})

       }
       
       
       
    }

    static actualizarCategoria = async(req,res)=>{

        
        const {id} = req.params 
        const {nombre,descripcion} = req.body;
       
        try{ 
           const objetoCategoria = new Categoria(nombre,descripcion)
           const categoria = await objetoCategoria.update(nombre,descripcion,id);
           res.json(categoria);
        }catch(error){
            res.status(500).json({error:error.message})
        }
        
    }

    static actualizarParcialmente = async(req,res) =>{
        
        const {id} = req.params 
        const info = req.body;
        
        
            
        
        try{ 
           const objetoCategoria = new Categoria()
           const categoria = await objetoCategoria.updateParcial(id,info);
           res.json(categoria);
        }catch(error){
            res.status(500).json({error:error.message})
        }

    }
    
    

    static eliminarRegistro = async(req,res) =>{
         
        const {id} = req.params;

        try{ 
            const objetoCategoria = new Categoria()
            const categoria = await objetoCategoria.delete(id);
            res.json(categoria);
         }catch(error){
             res.status(500).json({error:error.message})
         }

    }
}

export default CategoriaController;