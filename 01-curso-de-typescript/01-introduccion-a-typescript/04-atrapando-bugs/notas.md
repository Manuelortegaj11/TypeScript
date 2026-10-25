# 04 · Atrapando bugs

> **Sección:** Introducción a TypeScript · **Duración:** 05:11 min

## Notas

### Activar TypeScript en un archivo JavaScript

Si escribo `//@ts-check` en la primera línea de un archivo `.js`, VS Code usa el motor de TypeScript para revisarlo y marca los errores, sin tener que cambiar el archivo a `.ts`.

### Bugs que atrapa en el demo

El demo es un carrito de compras que trae productos de una API. Con `//@ts-check` aparecen estos errores:

| Código con bug | Problema | Corrección |
|---|---|---|
| `mehtod: 'GET'` | Error de tipeo: esa propiedad no existe en las opciones de `fetch`. | `method: 'GET'` |
| `rta.parseJson()` | La respuesta de `fetch` no tiene ese método. | `rta.json()` |
| `const total = 0` y luego `total += ...` | No se puede reasignar una constante. | `let total = 0` |
| `for (const i = 0; ...; i++)` | Lo mismo: `i++` reasigna una constante. | `let i = 0` |
| `products.length()` | `length` es una propiedad, no una función. | `products.length` |
| `getTotal <= limit` | Compara la función con un número; falta llamarla. | `getTotal() <= limit` |
| `addProducto(1)` | Esa función no existe; se llama `addProduct`. | `addProduct(1)` |
| `person + limit` | Suma un objeto con un número. | Eliminar esa línea. |

### Bugs que no atrapa

TypeScript solo detecta lo que puede deducir de los tipos:

- **`products[i].prize`** (debía ser `price`): `products` se declaró como `[]` sin tipo, así que TypeScript no sabe qué propiedades tienen los productos y no puede avisar del error de tipeo. Por eso hace falta tipar los datos, como en [transpilacion-ll.ts](../05-el-compilador-de-typescript/transpilacion-ll.ts).
- **`products.concat(data)`:** `concat` no modifica el arreglo, sino que devuelve uno nuevo, así que `products` sigue vacío. Es un error de lógica, no de tipos. Se corrige con `products.push(...data)`.

## Código

- [demo.js](./demo.js): el demo con `//@ts-check`. El código está comentado para que no marque errores en el editor.
