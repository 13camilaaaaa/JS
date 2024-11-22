/**Crear una función find que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el elemento pasado como argumento del primer callback que devuelva true
• sí ningún callback devuelve true, devuelva undefined
 */

const personas = [
    { nombre: 'Ana', edad: 28 },
    { nombre: 'Luis', edad: 22 },
    { nombre: 'Juan', edad: 25 }
];

const personaJoven = personas.find(function (per) {
    return per.edad > 30;
});

console.log(personaJoven);