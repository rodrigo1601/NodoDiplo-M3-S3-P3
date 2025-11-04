import dotenv from "dotenv";

dotenv.config();

import mongoose from "mongoose";

export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_DB_PASSWORD);
        console.log('Conectado a MongoDB');
    }catch(error){
        console.error('error de conexión:', error);
        process.exit(1); // Salir del proceso con un código de error
    }
}

