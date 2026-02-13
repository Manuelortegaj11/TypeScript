type Desarrollador = {
 nombre: string;
 edad: number;
 lenguaje: string[];
 Senior: boolean; // Aquí se permite tanto un booleano como una cadena de texto
};

let desarrollador: Desarrollador = { //Si pasas el mouse por encima, te puede dar cuenta que el lenguaje va infiriendo el tipo de dato, pero se puede especificar explícitamente.
 nombre: "Juan",
 edad: 30,
 lenguaje: ["TypeScript"],
 Senior: true
};


console.log(desarrollador); // Devuelve "Juan"







/*
let desarrollador = { //Si pasas el mouse por encima, te puede dar cuenta que el lenguaje va infiriendo el tipo de dato, pero se puede especificar explícitamente.
 nombre: "Juan",
 edad: 30,
 lenguaje: "TypeScript",
 Senior: true
};

desarrollador = {
 nombre: "María",
 edad: 25,
 lenguaje: "JavaScript",
 Senior: "si"
};

console.log(desarrollador); // Devuelve "María"
*/