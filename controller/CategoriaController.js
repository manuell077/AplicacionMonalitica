import Categoria from "../Models/Categoria.js";

class CategoriaController{
    
    static getAllCategorias = async(req,res)=>{
        const objCategoria = new Categoria();
        const categorias = await objCategoria.getAll();
        res.json(categorias)

    }

    static postCategorias = async(req,res)=>{
       const {nombre,descripcion} = req.body;
       try{
       const objCategoria = new Categoria(nombre,descripcion);
       const envio = await objCategoria.post();
       res.status(201).json(envio)
       }catch(error){
          res.status(500).json({error:error.message})

       }
       
       
       
    }
}

export default CategoriaController;