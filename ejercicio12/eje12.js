/** La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
promesas.
La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
después de ms milisegundos, para que podamos agregarle. then, así:*/

function delay(ms) {
    try {
        return new Promise(resolve => setTimeout(resolve, ms));
    } catch (error) {
        console.error(error);
    }
}

delay(3000).then(() => alert("se ejecuta despues de 3 segundos"));
