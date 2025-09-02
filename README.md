# Torneo de Deportes - TypeScript

## Descripción

Este proyecto implementa un **sistema de gestión de torneos deportivos** utilizando TypeScript.  
Permite crear jugadores, equipos, deportes, partidos y torneos, aplicando reglas y validaciones para garantizar la **integridad de los datos** y la coherencia de los torneos.

Entre las características principales se incluyen:

- Gestión de jugadores y equipos.  
- Validaciones de reglas deportivas (cantidad máxima de jugadores, equipos válidos).  
- Simulación de partidos con resultados.  
- Programación y seguimiento de torneos.  
- Uso de **polimorfismo** para validar equipos según el deporte.  

---

## Estructura del Proyecto

```
src/
interface/
IIdentificable.ts # Interface para objetos con ID
ICompetidor.ts # Interface para competidores (equipos)
models/
Jugador.ts # Clase Jugador
Equipo.ts # Clase Equipo
Deporte.ts # Clase abstracta Deporte
Futbol.ts # Clase Futbol (hereda Deporte)
Basquet.ts # Clase Basquet (hereda Deporte)
Resultado.ts # Clase Resultado de un partido
Partido.ts # Clase Partido
Torneo.ts # Clase Torneo
main.ts # Script de ejemplo y pruebas
index.html
package.json
tsconfig.json
README.md
```


---

## Funcionalidades

### Jugador
- **Atributos:** `id`, `nombre`, `edad`, `posición` (opcional).  
- **Métodos:** `toString()` para mostrar información del jugador.

### Equipo
- Implementa la interfaz `ICompetidor`.  
- Mantiene una **lista privada de jugadores**.  
- **Métodos:** `agregarJugador()`, `listarIntegrantes()`, `toString()`.  
- **Getter:** `cantidad` para obtener el número de jugadores.  
- Valida que no haya jugadores repetidos por `id`.

### Deporte (abstracto)
- **Atributos:** `nombre`, `maxPorEquipo`.  
- **Método abstracto:** `validar(equipo)` para controlar que el equipo cumpla con las reglas de ese deporte.  

### Futbol / Basquet
- Heredan de `Deporte`.  
- Implementan reglas específicas de validación de equipos según el deporte.  

### Partido
- **Atributos:** `id`, `local`, `visitante`, `deporte`, `resultado` (opcional).  
- **Métodos:** `jugar()`, `toString()`.  
- **Validaciones:**
  - Local y visitante no pueden ser el mismo equipo.  
  - Solo se juega si ambos equipos son válidos para el deporte.

### Resultado
- **Atributos:** `golesLocal`, `golesVisitante`.  
- **Método:** `toString()` para mostrar el resultado del partido.

### Torneo
- Permite **programar** y **listar partidos**.  
- Permite buscar si un partido está incluido en el torneo.


## Ejecución

1. Asegúrate de tener **Node.js** y **TypeScript** instalados.  
2. Compila el proyecto:
   ```bash
   tsc
   ```
3. Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```
4. El archivo `main.ts` contiene ejemplos de uso, creación de jugadores, equipos, partidos y torneos, mostrando las validaciones y reglas en acción.

---

## Ejemplo de uso

```typescript
// Crear jugadores
const jugador1 = new Jugador('1', 'Gabriel Batistuta', 55, 'Delantero');
const jugador2 = new Jugador('2', 'Juan Román Riquelme', 46, 'Centrocampista');

// Crear equipos y agregar jugadores
const equipoA = new Equipo('Equipo A');
equipoA.agregarJugador(jugador1);
equipoA.agregarJugador(jugador2);

// Crear deporte y partido
const futbol = new Futbol();
const partidoFutbol = new Partido(1, equipoA, equipoB, futbol);
const resultadoFutbol = partidoFutbol.jugar();
console.log(resultadoFutbol.toString());
```
