import Categoria from "../Models/Categoria.js";

class CategoriaController{
    
    static getAllCategorias = async(req,res)=>{
        const objCategoria = new Categoria();
        const categorias = await objCategoria.getAll();
        res.json(categorias)

    }

    static postCategorias = async(req,res)=>{
       const {nombre,descripcion} = req.body;
       const objCategoria = new Categoria(nombre,descripcion);
       const envio = await objCategoria.post();
       
    }
}

export default CategoriaController;