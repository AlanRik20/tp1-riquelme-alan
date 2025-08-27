import { Deporte } from "./Deporte";
import type { Equipo } from "./Equipo";

export class Futbol extends Deporte{
    constructor(){
        super("Futbol",11)
    }

    validar(equipo:Equipo): boolean {
        // const tieneArquero = equipo.jugadores.some(jugador => jugador.posicion?.toLowerCase() === 'arquero');
        return equipo.jugadores.length <= this.maxPorEquipo;
    }
}