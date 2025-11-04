export function renderizarSuperheroe(superheroe) {
    return {
        ID: superheroe.id,
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poder: superheroe.poderes,
        Aliado: superheroe.aliados,
        Enemigo: superheroe.enemigos,
        Creador: superheroe.creador
    };
}

export function renderizarSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}