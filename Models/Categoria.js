import connection from "../utils/db.js"

class Categoria{
    constructor(nombre,descripcion){
           this.nombre = nombre;
           this.descripcion = descripcion;
    }/**
     * Metodo para obtener los registros de la base de  datos
     * @returns {Array} Listado de las categorias en un arreglo 
     */
    async getAll(){
        try{
       const[rows] = await connection.query("SELECT * FROM categorias");
        return rows
        }catch(error){
            throw new Error("error al obtener las categorias")
        }
    }


    async post(nombre,descripcion){
         try{
            const[rows] = await connection.query("INSERT INTO categorias (nombre,descripcion) values(?,?)",[nombre, descripcion]);
            return {
                id: rows.id,
                nombre,
                descripcion
            } 
         }catch(error){
            throw new Error(" Error al enviar usuario");
            
         }

    }

    async update(nombre,descripcion,id){
        try{
           const[rows] = await connection.query('UPDATE categorias SET nombre = ? , descripcion = ?  where id = ?',[nombre,descripcion,id])
           
           if(rows.affectedRows === 0){
             throw new Error("Categoria no encontrada")
           }

           return {id,nombre:nombre , descripcion:descripcion}
        }catch(error){
            console.log(error)
        }
    }

    async updateParcial(id,info){

         try{
            for (const key in info) {
                
            
            const[rows] = await connection.query(`UPDATE categorias SET ${key} = ?   where id = ?`,[info[key],id] )
            }
            const[respuesta]  = await connection.query(`SELECT * FROM  categorias where id = ? `,[id]) 
            
            return respuesta;

         }catch(error){
             //console.log(error)
         }


    }

    async validarCategoriasVacias(categoria_id){
        const [respuesta] = await connection.query("SELECT * FROM  productos WHERE  categoria_id= ?",[categoria_id])
        return respuesta.length>0;

    }

    async delete(id){
       
        try{
           
            if(await this.validarCategoriasVacias(id)){

                throw new Error ("No se puede  eliminar la categoria porque tienen productos asociados ")
            }

            const[respuesta] = await connection.query('DELETE FROM categorias WHERE id = ?',[id])
            
            return respuesta;

        }catch(error){
           throw new Error(error)
        }

    }


    
}

export default Categoria;