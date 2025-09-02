import { Deporte } from "./Deporte"
import { Equipo } from "./Equipo"

export class Basquet extends Deporte{
        constructor(){
        super("Basquet",5)
    }

    validar(equipo:Equipo): boolean {
        // const tieneArquero = equipo.jugadores.some(jugador => jugador.posicion?.toLowerCase() === 'arquero');
        return equipo.cantidad <= this.maxPorEquipo;
    }

}
