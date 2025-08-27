import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";

const jugador = new Jugador("1","alan",21, "delantero");
const jugador2 = new Jugador("2","juan",22, "defensor");
console.log(jugador.toString());

const equipo = new Equipo("Equipo A");

equipo.agregarJugador(jugador);
equipo.agregarJugador(jugador2);
console.log(equipo.toString());
console.log(equipo.cantidad)