import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, required: true, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: {type: String},
    poderes: {type: [String], required: true},
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: { type: String, default: 'Desconocido' },
});

const SuperHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-19');
export default SuperHero;