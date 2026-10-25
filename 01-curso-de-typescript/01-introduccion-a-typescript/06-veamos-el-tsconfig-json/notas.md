# 06 · Veamos el TSConfig.json

> **Sección:** Introducción a TypeScript · **Duración:** 09:28 min

## Notas

### Qué es el `tsconfig.json`

Es el archivo de configuración del compilador. Con él ya no hace falta pasarle opciones a `tsc` en cada comando: defino una sola vez qué archivos compilar, a dónde enviar el resultado y qué tan estricto debe ser el análisis.

### Comandos

```bash
# Crear el tsconfig.json con las opciones recomendadas
pnpm tsc --init

# Compilar todo el proyecto según el tsconfig.json
pnpm tsc

# Compilar automáticamente cada vez que guardo un archivo
pnpm tsc --watch
```

### Opciones de mi `tsconfig.json`

| Opción | Valor | Para qué sirve |
|---|---|---|
| `rootDir` | `./` | Carpeta base del código; `dist/` copia la estructura desde aquí. |
| `outDir` | `./dist` | Carpeta donde queda el JavaScript generado. |
| `target` | `esnext` | Versión de JavaScript de salida: la más reciente. |
| `module` | `nodenext` | Sistema de módulos, el mismo que usa Node. |
| `strict` | `true` | Activa todas las verificaciones estrictas de tipos. |
| `noUncheckedIndexedAccess` | `true` | Al leer un arreglo por índice, el resultado puede ser `undefined`. |
| `exactOptionalPropertyTypes` | `true` | A una propiedad opcional (`name?: string`) no se le puede asignar `undefined` explícitamente, a menos que su tipo lo incluya. |
| `moduleDetection` | `force` | Trata cada archivo como un módulo con su propio alcance. |
| `sourceMap`, `declaration`, `declarationMap` | `true` | Generan archivos `.map` y `.d.ts` junto a cada `.js` en `dist/`. |

### Por qué `moduleDetection: "force"`

Este repo tiene un solo `tsconfig.json` para los tres cursos, y en muchas clases se repiten nombres de variables. Sin esta opción, los archivos sin `import` ni `export` comparten el espacio global y aparece el error `Cannot redeclare block-scoped variable` (ver clase 05).

### Diferencias con el curso (TypeScript 7)

El curso usa TypeScript 4. El `tsconfig.json` que genera `tsc --init` en TypeScript 7 es más estricto, y algunos comandos cambian:

| Error | Por qué pasa | Solución |
|---|---|---|
| `TS5112`: tsconfig.json is present but will not be loaded if files are specified on commandline | Si existe un `tsconfig.json`, ya no se puede compilar un archivo suelto con `pnpm tsc archivo.ts`. Antes se ignoraba el `tsconfig.json` en silencio. | Compilar todo con `pnpm tsc`, o un solo archivo con `pnpm tsc archivo.ts --ignoreConfig --outDir dist`. |
| `TS5011`: The common source directory of 'tsconfig.json' is ... | TypeScript 6 cambió el valor por defecto de `rootDir`. En vez de cambiar la estructura de `dist/` sin avisar, pide definirlo. | `"rootDir": "./"` |
| `TS2532`: Object is possibly 'undefined' | Por `noUncheckedIndexedAccess`, `products[i]` puede ser `undefined`. | Recorrer con `for...of`, o validar el valor antes de usarlo. |

### Advertencia de VS Code sobre `schemastore.org`

Si VS Code muestra *Unable to load schema from 'https://www.schemastore.org/tsconfig'*, no es un error del proyecto: el editor no pudo descargar la ayuda (autocompletado y explicaciones) para editar el `tsconfig.json`, normalmente por la conexión. Se quita sola al recargar la ventana cuando vuelve internet.

## Código

- [tsconfig.json](../../../tsconfig.json), en la raíz del repo.
