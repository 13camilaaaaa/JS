/** Crear una función some que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si al menos una de las llamadas al callback devolvió true*/

const numeros = [3, 8, 4, 97];

const resultado = numeros.some(function(num){
    return num > 10;
})

console.log(resultado);