import { Jugador } from './models/Jugador.js';
import { Equipo } from './models/Equipo.js';
import { Basquet } from './models/Basquet.js';
import { Partido } from './models/Partido.js';
import { Futbol } from './models/Futbol.js';
import { Torneo } from './models/Torneo.js';

console.log('--- Creación de jugadores ---');

// Array de jugadores para Equipo A
const jugadoresA = [
  new Jugador('1', 'Gabriel Batistuta', 55, 'Delantero'),
  new Jugador('2', 'Juan Román Riquelme', 46, 'Centrocampista'),
  new Jugador('3', 'Carlos Tevez', 40, 'Delantero'),
  new Jugador('4', 'Javier Zanetti', 51, 'Defensor'),
  new Jugador('5', 'Roberto Ayala', 52, 'Defensor'),
  new Jugador('6', 'Ariel Ortega', 50, 'Delantero'),
  new Jugador('7', 'Diego Simeone', 54, 'Centrocampista'),
  new Jugador('8', 'Esteban Cambiasso', 44, 'Centrocampista'),
  new Jugador('9', 'Martín Demichelis', 43, 'Defensor'),
  new Jugador('10', 'Hernán Crespo', 49, 'Delantero'),
  new Jugador('11', 'Pablo Aimar', 45, 'Centrocampista')
];

const equipoA = new Equipo('Equipo A');
jugadoresA.forEach(jugador => equipoA.agregarJugador(jugador));

console.log('\n--- Integrantes de Equipo A ---');
equipoA.listarIntegrantes().forEach((jugador, idx) => {
  console.log(`${idx + 1}. ${jugador}`);
});
console.log(`Cantidad de integrantes: ${equipoA.cantidad}`);

// Array de jugadores para Equipo B
const jugadoresB = [
  new Jugador('12', 'Andrés Iniesta', 40, 'Centrocampista'),
  new Jugador('13', 'Xavi Hernández', 45, 'Centrocampista'),
  new Jugador('14', 'Gerard Piqué', 38, 'Defensor'),
  new Jugador('15', 'Carles Puyol', 47, 'Defensor'),
  new Jugador('16', 'David Villa', 43, 'Delantero'),
  new Jugador('17', 'Iker Casillas', 44, 'Portero'),
  new Jugador('18', 'Sergio Busquets', 36, 'Centrocampista'),
  new Jugador('19', 'Fernando Torres', 41, 'Delantero'),
  new Jugador('20', 'Jordi Alba', 36, 'Defensor'),
  new Jugador('21', 'Cesc Fàbregas', 38, 'Centrocampista'),
  new Jugador('22', 'Pedro Rodríguez', 38, 'Delantero')
];

const equipoB = new Equipo('Equipo B');
jugadoresB.forEach(jugador => equipoB.agregarJugador(jugador));

console.log('\n--- Integrantes de Equipo B ---');
equipoB.listarIntegrantes().forEach((jugador, idx) => {
  console.log(`${idx + 1}. ${jugador}`);
});
console.log(`Cantidad de integrantes: ${equipoB.cantidad}`);

const futbol = new Futbol();
const basquet = new Basquet();

console.log('\n--- Validaciones de deporte (polimorfismo) ---');
console.log(`Equipo A válido para fútbol? ${futbol.validar(equipoA)?'Válido':'No apto'}`);
console.log(`Equipo A válido para básquet? ${basquet.validar(equipoA)?'Válido':'No apto'}`);
console.log(`Equipo B válido para fútbol? ${futbol.validar(equipoB)?'Válido':'No apto'}`);
console.log(`Equipo B válido para básquet? ${basquet.validar(equipoB)?'Válido':'No apto'}`);

console.log('\n--- Partido de Fútbol ---');
const partidoFutbol = new Partido(1, equipoA, equipoB, futbol);
const resultadoFutbol = partidoFutbol.jugar();
console.log(resultadoFutbol.toString());

// Array de jugadores para Equipo C (Básquet)
const jugadoresC = [
  new Jugador('23', 'Facundo Campazzo', 33, 'Base'),
  new Jugador('24', 'Luka Doncic', 26, 'Escolta'),
  new Jugador('25', 'Nikola Jokic', 30, 'Pívot'),
  new Jugador('26', 'Giannis Antetokounmpo', 30, 'Ala-pívot'),
  new Jugador('27', 'Kawhi Leonard', 34, 'Alero')
];
const equipoC = new Equipo('Equipo C');
jugadoresC.forEach(jugador => equipoC.agregarJugador(jugador));

console.log('\n--- Integrantes de Equipo C ---');
equipoC.listarIntegrantes().forEach((jugador, idx) => {
  console.log(`${idx + 1}. ${jugador}`);
});
console.log(`Cantidad de integrantes: ${equipoC.cantidad}`);

// Array de jugadores para Equipo D (Básquet)
const jugadoresD = [
  new Jugador('28', 'Stephen Curry', 37, 'Base'),
  new Jugador('29', 'LeBron James', 40, 'Alero'),
  new Jugador('30', 'Anthony Davis', 32, 'Pívot'),
  new Jugador('31', 'James Harden', 36, 'Escolta'),
  new Jugador('32', 'Jayson Tatum', 27, 'Alero')
];
const equipoD = new Equipo('Equipo D');
jugadoresD.forEach(jugador => equipoD.agregarJugador(jugador));

console.log('\n--- Integrantes de Equipo D ---');
equipoD.listarIntegrantes().forEach((jugador, idx) => {
  console.log(`${idx + 1}. ${jugador}`);
});
console.log(`Cantidad de integrantes: ${equipoD.cantidad}`);

console.log('\n--- Partido de Básquet ---');
const partidoBasquet = new Partido(2, equipoC, equipoD, basquet);
const resultadoBasquet = partidoBasquet.jugar();
console.log(resultadoBasquet.toString());

// Torneo
const torneo = new Torneo("1", 'Torneo Internacional');
torneo.programarPartido(partidoFutbol);
torneo.programarPartido(partidoBasquet);

console.log('\n--- Lista de partidos del Torneo ---');
console.log(torneo.listarPartidos());
console.log(`¿El partido de fútbol está en el torneo? ${torneo.buscarPartido(partidoFutbol)?'Sí':'No'}`);
