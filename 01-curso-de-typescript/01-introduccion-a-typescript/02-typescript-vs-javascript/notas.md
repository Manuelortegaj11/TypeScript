# 02 · TypeScript vs. JavaScript

> **Sección:** Introducción a TypeScript · **Duración:** 05:45 min

## Notas

### La diferencia principal

- **JavaScript:** me doy cuenta del error hasta que ejecuto el código.
- **TypeScript:** me doy cuenta antes de ejecutarlo, mientras escribo, y puedo corregirlo de inmediato.

Recibir feedback lo antes posible significa menos errores en producción y un ciclo de desarrollo más rápido.

### Las capas de verificación

El libro *Software Engineering at Google* [1] describe varias capas que usan para asegurarse de que el software funciona. Cada capa es más lenta que la anterior:

| Capa | Cuánto tarda | Qué verifica |
|---|---|---|
| Análisis estático | Instantáneo, corre en el editor | Errores de tipeo y llamadas incorrectas a funciones; además, autocompleta el código. |
| Pruebas unitarias | Unos segundos | Que el código hace lo que creo que hace. |
| Pruebas de integración | Unos minutos | Que el sistema completo funciona; pueden atrapar casos borde. |
| Revisión de código | Unas horas | Que sigo las normas y buenas prácticas del equipo. |

TypeScript cubre la primera capa, el análisis estático: la más rápida y la que atrapa los errores más temprano.

### Referencia

[1] Titus Winters, Tom Manshreck y Hyrum Wright, *Software Engineering at Google: Lessons Learned from Programming Over Time* (O'Reilly, 2020).

## Código

Esta clase es teórica; no tiene código.
