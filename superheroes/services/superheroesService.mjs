import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

const repo = new SuperHeroRepository();

export async function obtenerTodosLosSuperheroes() {
    return await repo.obtenerTodos();
}

export async function obtenerSuperheroePorId(id) {
    return await repo.obtenerPorId(id);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await repo.obtenerMayoresDe30();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await repo.buscarPorAtributo(atributo, valor);
}

export async function crearSuperheroe(superheroeData) {
    return await repo.crear(superheroeData);
}

export async function actualizarSuperheroe(id, superheroeData) {
    return await repo.actualizar(id, superheroeData);
}

export async function eliminarSuperheroe(id) {
    return await repo.eliminar(id);
}

export async function eliminarSuperheroePorNombre(nombre) {
    return await repo.eliminarPorNombreSuperheroe(nombre);
}