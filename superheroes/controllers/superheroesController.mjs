import {obtenerSuperheroePorId, obtenerTodosLosSuperheroes, 
    obtenerSuperheroesMayoresDe30, buscarSuperheroesPorAtributo,
    crearSuperheroe, actualizarSuperheroe, eliminarSuperheroe, eliminarSuperheroePorNombre} from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarSuperheroes } from "../views/responseView.mjs";

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        return res.render('dashboard', { superheroes });

        /* const superheroesFormateados = renderizarSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados); */

    }catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}

export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);

        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    }catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();

        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes mayores de 30 años' });
        }

        const superheroesFormateados = renderizarSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes mayores de 30', error: error.message });
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;

        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: `No se encontraron superhéroes con ${atributo} igual a ${valor}` });
        }

        const superheroesFormateados = renderizarSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar superhéroes por atributo', error: error.message });
    }
}

// Controlador para mostrar el formulario de agregar superhéroe
export async function mostrarFormularioAgregarController(req, res) {
    try {
        res.render('addSuperhero');
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al cargar el formulario', error: error.message });
    }
}

export async function crearSuperheroeController(req, res) {
    try{

        const {nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador} = req.body;
        const nuevoSuperheroe = {nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador};
        const superheroeCreado = await crearSuperheroe(nuevoSuperheroe);
        const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
        res.status(201).json({
            mensaje: 'Superheroe creado correctamente',
            superheroe: superheroeFormateado
        });

    }catch (error){
        res.status(500).send({ mensaje: 'Error al crear el superheroe', error: error.message });
    }
}

// Controlador para mostrar el formulario de editar superhéroe
export async function mostrarFormularioEditarController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);

        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        res.render('editSuperhero', { superheroe });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al cargar el formulario de edición', error: error.message });
    }
}

export async function actualizarSuperheroeController(req, res) {
    try{
        const { id } = req.params;
        const superheroeData = req.body;

        const superheroeActualizado = await actualizarSuperheroe(id, superheroeData);
        if (!superheroeActualizado) {
            return res.status(404).send({ mensaje: 'Superheroe no encontrado para actualizar' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeActualizado);
        res.status(200).json({
            mensaje: 'Superheroe actualizado correctamente',
            superheroe: superheroeFormateado
        });

    }catch (error){
        res.status(500).send({ mensaje: 'Error al actualizar el superheroe', error: error.message });
    }
}

export async function eliminarSuperheroeController(req, res) {
    try {
        const { id } = req.params;

        const superheroeEliminado = await eliminarSuperheroe(id);

        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: "Superheroe no encontrado para eliminar" });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);

        res.status(200).json({
            mensaje: "Superheroe eliminado correctamente",
            superheroe: superheroeFormateado
        });

    } catch (error) {
        res.status(500).send({ mensaje: "Error al eliminar el superheroe", error: error.message });
    }
}

export async function eliminarSuperheroePorNombreController(req, res) {
    try {
        const { nombreSuperHeroe } = req.params;

        // Buscar el superheroe por nombre
        const superheroes = await buscarSuperheroesPorAtributo('nombreSuperHeroe', nombreSuperHeroe);

        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: "Superhéroe no encontrado para eliminar por nombre" });
        }

        const superheroe = superheroes[0];

        // Eliminar el superheroe encontrado
        const superheroeEliminado = await eliminarSuperheroePorNombre(superheroe.nombreSuperHeroe);

        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);

        res.status(200).json({
            mensaje: "Superheroe eliminado correctamente por nombre",
            superheroe: superheroeFormateado
        });

    }catch (error) {
        res.status(500).send({ mensaje: "Error al eliminar el superheroe por nombre", error: error.message });
    }
}
