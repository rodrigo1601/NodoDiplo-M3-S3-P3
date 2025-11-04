class IRepository {
    obtenerTodos() {
        throw new Error("El método 'obtenerTodos' debe ser implementado.");
    }

    obtenerPorId(id) {
        throw new Error("El método 'obtenerPorId' debe ser implementado.");
    }

    obtenerMayoresDe30(){
        throw new Error("El método 'obtenerMayoresDe30' debe ser implementado.");
    }

    buscarPorAtributo(atributo, valor) {
        throw new Error("El método 'buscarPorAtributo' debe ser implementado.");
    }

    crear(superheroeData) {
        throw new Error("El método 'crear' debe ser implementado.");
    }

    actualizar(id, superheroeData) {
        throw new Error("El método 'actualizar' debe ser implementado.");
    }

    eliminar(id) {
        throw new Error("El método 'eliminar' debe ser implementado.");
    }

    eliminarPorNombreSuperheroe(nombre) {
        throw new Error("El método 'eliminarPorNombre' debe ser implementado.");
    }
}

export default IRepository;