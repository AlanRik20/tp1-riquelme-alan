import type { ICompetidor } from "../interface/ICompetidor";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor {
  nombre: string;
  private jugadores: Jugador[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.jugadores = [];
  }

  agregarJugador(jugador: Jugador) {
    const existe = this.jugadores.some((j) => j.id === jugador.id);
    if (existe) {
      throw new Error(
        `Ya existe un jugador con el id ${jugador.id} en el equipo`
      );
    }
    this.jugadores.push(jugador);
  }

  listarIntegrantes(): string[] {
    return this.jugadores.map((jugador) => jugador.toString());
  }

  toString(): string {
    return `Equipo: ${this.nombre}, Jugadores: ${this.listarIntegrantes().join(
      ", "
    )}`;
  }
  get cantidad(): number {
    return this.jugadores.length;
  }
}
