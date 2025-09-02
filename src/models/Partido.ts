import { Deporte } from './Deporte.js';
import { Equipo } from './Equipo.js';
import { Resultado } from './Resultado.js';

export class Partido {
  constructor(
    public id: number,
    public local: Equipo,
    public visitante: Equipo,
    public deporte: Deporte,
    public resultado?: Resultado
  ) {
    if (local.nombre === visitante.nombre) {
      throw new Error('El equipo local no puede ser el mismo que el visitante');
    }
  }

  jugar(): Resultado {
    if (!this.deporte.validar(this.local)) {
      throw new Error(
        `El equipo local no cumple con las reglas de ${this.deporte.nombre}`
      );
    }
    if (!this.deporte.validar(this.visitante)) {
      throw new Error(
        `El equipo visitante no cumple con las reglas de ${this.deporte.nombre}`
      );
    }

    const golesLocal = Math.floor(Math.random() * 5);
    const golesVisitante = Math.floor(Math.random() * 5);

    this.resultado = new Resultado(golesLocal, golesVisitante);
    return this.resultado;
  }

  toString(): string {
    const resultadoStr = this.resultado
      ? this.resultado.toString()
      : 'Sin jugar';
    return `Partido ${this.id} de ${this.deporte.nombre}: ${this.local.nombre} vs ${this.visitante.nombre} - ${resultadoStr}`;
  }
}