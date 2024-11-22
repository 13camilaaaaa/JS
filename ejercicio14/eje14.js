/**Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await. */


function esperarSegundo() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve("Operacion completada");
        }, 3000);
    });    
}

async function realizarOperacion() {
    const resultadoFinal = await esperarSegundo();
    return resultadoFinal;
}

realizarOperacion().then(console.log);

    
