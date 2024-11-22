/**Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback. */


const persona = [ 
    {nombre: 'ana', edad: 28},
    {nombre: 'juan', edad: 35},
    {nombre: 'maria', edad: 27}
];

const nombres = persona.map(persona => persona.nombre);
console.log(nombres); // [ana, juan, maria]