import { Partido } from './Partido.js';

export class Torneo {
  private partidos: Partido[] = [];

  constructor(public readonly id: string, public nombre: string) {}

  programarPartido(partido: Partido): void {
    this.partidos.push(partido);
  }

  listarPartidos(): string[] {
    return this.partidos.map(partido => partido.toString());
  }

  buscarPartido(partido: Partido): boolean {
    return this.partidos.some(p => p.id === partido.id);
  }
}   