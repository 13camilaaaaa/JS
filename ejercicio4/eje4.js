/**Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro".
 */



let numeros = [6, 5, 18, 37, 22, 50];

let par = numeros.filter(function(num){
    return num % 2 === 0;
});

console.log(par);
