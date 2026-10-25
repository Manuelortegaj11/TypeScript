# 03 · Configurando nuestro proyecto

> **Sección:** Introducción a TypeScript · **Duración:** 05:51 min

## Notas

### Pasos

1. Crear la carpeta del proyecto y abrirla en VS Code.
2. Iniciar el proyecto de Node para generar el `package.json`.
3. Agregar un `.gitignore` para no subir dependencias ni archivos generados.
4. Agregar un `.editorconfig` para que el editor use siempre el mismo formato.
5. Instalar TypeScript como dependencia de desarrollo.
6. Verificar la instalación.

### Comandos

El curso usa npm; en este repo uso pnpm:

| Paso | npm (curso) | pnpm (este repo) |
|---|---|---|
| Iniciar el proyecto | `npm init -y` | `pnpm init` |
| Instalar TypeScript | `npm install typescript --save-dev` | `pnpm add -D typescript` |
| Ver la versión | `npx tsc --version` | `pnpm tsc --version` |

TypeScript se instala en cada proyecto como dependencia de desarrollo, no de forma global. Así cada proyecto usa su propia versión, y quien clone el repo obtiene la misma al instalar las dependencias.

### `.gitignore`

Lo generé con [gitignore.io de Toptal](https://www.toptal.com/developers/gitignore), usando las plantillas `windows`, `linux`, `node` y `macos`. Lo más importante que ignora: `node_modules/`, `dist` y los archivos `.env`.

### `.editorconfig`

Define reglas de formato que el editor aplica a todos los archivos:

- **Todos los archivos:** UTF-8, indentación con 2 espacios, línea vacía al final y sin espacios sobrantes al final de cada línea.
- **`.ts`:** comillas simples. La extensión de VS Code no aplica esta regla por sí sola; para eso se usa Prettier o ESLint.
- **`.md`:** no se borran los espacios al final, porque en Markdown dos espacios al final de una línea son un salto de línea.

> En VS Code hace falta la extensión **EditorConfig for VS Code** para que estas reglas se apliquen.

## Código

Los archivos de configuración están en la raíz del repo:

- [package.json](../../../package.json)
- [.gitignore](../../../.gitignore)
- [.editorconfig](../../../.editorconfig)
