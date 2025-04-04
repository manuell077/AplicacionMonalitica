import connection from "../utils/db.js"

class Productos{
    constructor(){
           
    }/**
     * Metodo para obtener los registros de la base de  datos
     * @returns {Array} Listado de las categorias en un arreglo 
     */
    async getAll(){
        try{
       const[rows] = await connection.query("SELECT * FROM productos");
        return rows
        }catch(error){
            throw new Error("error al obtener las categorias")
        }
    }


    async postAll(nombre, descripcion,precio,categoria_id) {
        try {
          
          const [result] = await connection.query("INSERT INTO productos (nombre,descripcion,precio,categoria_id) values(?,?,?,?)",[nombre, descripcion,precio,categoria_id])
          
          return {
            id:result.id,
            nombre,
            descripcion,
            precio,
            categoria_id
          }
        } catch (error) {
          throw new Error("Error al insertar el producto");
        }
      }

    async update(nombre,descripcion,id,precio,categoria_id){
         
        try{
            const[rows] = await connection.query('UPDATE productos SET nombre = ? , descripcion = ? , precio = ? , categoria_id = ?  where id = ?',[nombre,descripcion,precio,categoria_id,id])
            
            if(rows.affectedRows === 0){
              throw new Error("Producto no encontrado")
            }
 
            return {id,nombre:nombre , descripcion:descripcion , precio:precio ,categoria_id:categoria_id } 
         }catch(error){
             console.log(error)
         }


    }

    async updateParcial(id,info){

        try{
           for (const key in info) {
               
           
           const[rows] = await connection.query(`UPDATE productos SET ${key} = ?   where id = ?`,[info[key],id] )
           }
           const[respuesta]  = await connection.query(`SELECT * FROM  productos where id = ? `,[id]) 
           
           return respuesta;

        }catch(error){
            //console.log(error)
        }


   }


   async delete(id){
       
    try{
        const[respuesta] = await connection.query('DELETE FROM productos where id = ?',[id])
        

    }catch(error){
      console.log(error);
    }

}



}

export default Productos;