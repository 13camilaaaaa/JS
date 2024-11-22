/**En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
pesado que demora más de 100 ms en finalizar.
¿Cuándo se ejecutará la función programada y por qué se ejecutará?
a) Después del bucle.
b) Antes del bucle.
c) Al comienzo del bucle.
¿Qué va a mostrar alert()? */

// declaramos una variable let y se le asigna el numero 0
let i = 0;

// declaramos una función
setTimeout(() => console.log(i), 100); //?

// iniciamos un bucle for que se repite 100000000 veces
for (let j = 0; j < 100000000; j++) {
    // dentro del bucle se ejecuta un cálculo pesado y estara en aumento la variable i
    i++;
}
// teniendo en cuenta que i se le asigno 0
// y como este bucle empieza en 0
// i tendra el mismo valor al final de (100000000);

// ya teniendo i, hay si se realiza la funcion y en un tiempo de 100 ms