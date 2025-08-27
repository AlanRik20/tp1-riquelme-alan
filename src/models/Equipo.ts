import type { ICompetidor } from "../interface/ICompetidor";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor {
    nombre:string;
    private jugadores: Jugador[];

    constructor(nombre:string){
        this.nombre = nombre;
        this.jugadores = [];
    }
    
    agregarJugador(jugador: Jugador){
        this.jugadores.push(jugador);
    }

    listarIntegrantes():string[]{
        return this.jugadores.map(jugador => jugador.toString());
    }

    toString(): string {
        return `Equipo: ${this.nombre}, Jugadores: ${this.listarIntegrantes().join(", ")}`;
    }   
    get cantidad(): number{
        return this.jugadores.length;
    }
}