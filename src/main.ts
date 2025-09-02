import { Jugador } from './models/Jugador.js';
import { Equipo } from './models/Equipo.js';
import { Basquet } from './models/Basquet.js';
import { Partido } from './models/Partido.js';
import { Futbol } from './models/Futbol.js';
import { Torneo } from './models/Torneo.js';

console.log('--- Creación de jugadores ---');

// Jugadores de ejemplo
const jugador1 = new Jugador('1', 'Gabriel Batistuta', 55, 'Delantero');
const jugador2 = new Jugador('2', 'Juan Román Riquelme', 46, 'Centrocampista');

console.log(jugador1.toString());
console.log(jugador2.toString());

// Equipo A (Fútbol)
const equipoA = new Equipo('Equipo A');
equipoA.agregarJugador(jugador1);
equipoA.agregarJugador(jugador2);
equipoA.agregarJugador(new Jugador('3', 'Carlos Tevez', 40, 'Delantero'));
equipoA.agregarJugador(new Jugador('4', 'Javier Zanetti', 51, 'Defensor'));
equipoA.agregarJugador(new Jugador('5', 'Roberto Ayala', 52, 'Defensor'));
equipoA.agregarJugador(new Jugador('6', 'Ariel Ortega', 50, 'Delantero'));
equipoA.agregarJugador(new Jugador('7', 'Diego Simeone', 54, 'Centrocampista'));
equipoA.agregarJugador(new Jugador('8', 'Esteban Cambiasso', 44, 'Centrocampista'));
equipoA.agregarJugador(new Jugador('9', 'Martín Demichelis', 43, 'Defensor'));
equipoA.agregarJugador(new Jugador('10', 'Hernán Crespo', 49, 'Delantero'));
equipoA.agregarJugador(new Jugador('11', 'Pablo Aimar', 45, 'Centrocampista'));

console.log('\n--- Creación de equipos ---');
console.log(equipoA.toString());
console.log(`Cantidad de integrantes: ${equipoA.cantidad}`);

// Equipo B (Fútbol)
const equipoB = new Equipo('Equipo B');
equipoB.agregarJugador(new Jugador('12', 'Andrés Iniesta', 40, 'Centrocampista'));
equipoB.agregarJugador(new Jugador('13', 'Xavi Hernández', 45, 'Centrocampista'));
equipoB.agregarJugador(new Jugador('14', 'Gerard Piqué', 38, 'Defensor'));
equipoB.agregarJugador(new Jugador('15', 'Carles Puyol', 47, 'Defensor'));
equipoB.agregarJugador(new Jugador('16', 'David Villa', 43, 'Delantero'));
equipoB.agregarJugador(new Jugador('17', 'Iker Casillas', 44, 'Portero'));
equipoB.agregarJugador(new Jugador('18', 'Sergio Busquets', 36, 'Centrocampista'));
equipoB.agregarJugador(new Jugador('19', 'Fernando Torres', 41, 'Delantero'));
equipoB.agregarJugador(new Jugador('20', 'Jordi Alba', 36, 'Defensor'));
equipoB.agregarJugador(new Jugador('21', 'Cesc Fàbregas', 38, 'Centrocampista'));
equipoB.agregarJugador(new Jugador('22', 'Pedro Rodríguez', 38, 'Delantero'));

console.log(equipoB.toString());
console.log(`Cantidad de integrantes: ${equipoB.cantidad}`);

const futbol = new Futbol();
const basquet = new Basquet();

console.log('\n--- Validaciones de deporte (polimorfismo) ---');
console.log(`Equipo A válido para fútbol? ${futbol.validar(equipoA)}`);
console.log(`Equipo A válido para básquet? ${basquet.validar(equipoA)}`);
console.log(`Equipo B válido para fútbol? ${futbol.validar(equipoB)}`);
console.log(`Equipo B válido para básquet? ${basquet.validar(equipoB)}`);

console.log('\n--- Partido de Fútbol ---');
const partidoFutbol = new Partido(1, equipoA, equipoB, futbol);
const resultadoFutbol = partidoFutbol.jugar();
console.log(resultadoFutbol.toString());

// Equipo C (Básquet)
const equipoC = new Equipo('Equipo C');
equipoC.agregarJugador(new Jugador('23', 'Facundo Campazzo', 33, 'Base'));
equipoC.agregarJugador(new Jugador('24', 'Luka Doncic', 26, 'Escolta'));
equipoC.agregarJugador(new Jugador('25', 'Nikola Jokic', 30, 'Pívot'));
equipoC.agregarJugador(new Jugador('26', 'Giannis Antetokounmpo', 30, 'Ala-pívot'));
equipoC.agregarJugador(new Jugador('27', 'Kawhi Leonard', 34, 'Alero'));

const equipoD = new Equipo('Equipo D');
equipoD.agregarJugador(new Jugador('28', 'Stephen Curry', 37, 'Base'));
equipoD.agregarJugador(new Jugador('29', 'LeBron James', 40, 'Alero'));
equipoD.agregarJugador(new Jugador('30', 'Anthony Davis', 32, 'Pívot'));
equipoD.agregarJugador(new Jugador('31', 'James Harden', 36, 'Escolta'));
equipoD.agregarJugador(new Jugador('32', 'Jayson Tatum', 27, 'Alero'));

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
console.log(`¿El partido de fútbol está en el torneo? ${torneo.buscarPartido(partidoFutbol)}`);
