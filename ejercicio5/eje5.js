/** Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true*/

let estudiantes = [
    { nombre: 'ana', aprobado: true },
    { nombre: 'juan', aprobado: false },
    { nombre: 'maria', aprobado: true }
];

let toaprovados = estudiantes.every(est => est.aprobado);

console.log(toaprovados);
