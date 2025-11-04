import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    async obtenerTodos() {
        return await SuperHero.find();
    }

    async obtenerPorId(id) {

        //return await SuperHero.findOne({id});
        return await SuperHero.findById(id);
    }

    async obtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30 }, planetaOrigen: 'Tierra', 'poderes.1': {$exists: true}});
    }

    async buscarPorAtributo(atributo, valor) {
        // Obtener el tipo real del atributo en el schema en models
        const tipo = SuperHero.schema.path(atributo)?.instance; // "String", "Number", etc.

        // Convertir valor al tipo correspondiente
        let filtroValor;
        if (tipo === "Number") {
            filtroValor = Number(valor);
        } else {
            filtroValor = new RegExp(`^${valor}$`, "i");
        }

        const doc = await SuperHero.find({ [atributo]: filtroValor });
        return doc;
    }

    async crear(superheroeData) {
        const nuevoSuperheroe = new SuperHero(superheroeData);
        return await nuevoSuperheroe.save();
    }

    async actualizar(id, superheroeData) {
        return await SuperHero.findByIdAndUpdate(id, superheroeData, { new: true });
    }

    async eliminar(id) {
        return await SuperHero.findByIdAndDelete(id);
    }

    async eliminarPorNombreSuperheroe(nombre) {
        return await SuperHero.findOneAndDelete({ nombreSuperHeroe: nombre });
    }
}

export default SuperHeroRepository;