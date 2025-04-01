import express from "express";
import bodyParser from "body-parser"


import  categoriasRouter from "./routes/categoriasRoutes.js" 
import  productosRouter from   "./routes/productosRoutes.js" 
const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({"extended":true}))

app.use("/categorias",categoriasRouter)
app.use("/productos",productosRouter)




app.listen(3000,()=>{
    console.log("Hola ");
});