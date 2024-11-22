/**Crear una función takeWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos hasta el primer callback que devolvió false
• (Inverso del dropWhile)
 */

const hola = require("lodash");

let numero =  [1,4,7,8,120,-38,95];

let resultado = hola.takeWhile(numero, (num) => num > 67);

console.log("numeros", numero);
console.log("numeros pares:", resultado);
