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
       console.log(rows);
        }catch(error){
            throw new Error("error al obtener las categorias")
        }
    }


    async post(){
         try{
            const[rows] = await connection.query("INSERT INTO categorias (nombre,descripcion) values(?,?)",[this.nombre, this.descripcion]);
            return {
                id: rows.id,
                nombre:this.nombre,
                descripcion: this.descripcion
            } 
         }catch(error){
            throw new Error(" Error al enviar usuario");
            
         }

    }
}

export default Categoria;