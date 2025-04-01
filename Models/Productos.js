import connection from "../utils/db.js"

class Productos{
    constructor(nombre,descripcion,precio,categoria_id){
           this.nombre = nombre;
           this.descripcion = descripcion;
           this.precio = precio;
           this.categoria_id = categoria_id
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


    async post(){
         try{
            const[rows] = await connection.query("INSERT INTO productos (nombre,descripcion,precio,categoria_id) values(?,?,?,?)",[this.nombre, this.descripcion, this.precio , this.categoria_id]);
            return {
                id: rows.id,
                nombre:this.nombre,
                descripcion: this.descripcion,
                precio: this.precio,
                categoria_id : this.categoria_id
            } 
         }catch(error){
            throw new Error(" Error al enviar usuario");
            
         }

    }
}

export default Productos;