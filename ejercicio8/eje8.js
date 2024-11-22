/** Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
devuelva true
• sí ningún callback devuelve true, devuelva undefined
*/

let pedidos = [
    { producto: 'pantalon', cantidad: 3},
    { producto: 'camisa', cantidad: 2},
    { producto: 'zapatos', cantidad: 1}
];

let resultado = pedidos.findIndex(function(pedi){
    return pedi.cantidad < 2;
})

console.log(resultado);



