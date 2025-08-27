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
        // console.log(`Listado de integrantes del equipo ${this.nombre}`);
        return this.jugadores.map(jugador => jugador.toString());
    }

    toString(): string {
        return `Equipo: ${this.nombre}, Jugadores: ${this.listarIntegrantes().join(", ")}`;
    }   

}