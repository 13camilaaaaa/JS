/**Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
Promise.allSettled() para obtener información sobre el estado de todas las Promises. */

const numero = parseInt(prompt("Ingresa un numero: "));

const Promisa1 = (parametro) => {
    return new Promise((resolve, reject) => {
        if (parametro % 2 === 0) {
            resolve(`El numero es ${parametro} Par`);
        } else {
            reject(`El numero no es ${parametro} Par`);
        }
    });
}


// Promisa1(numero)
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

    
const Promisa2 = (parametro) => {
    return new Promise((resolve, reject) => {
        if (typeof(parametro) === "number") {
            resolve(`El parametro ${parametro} es un numero`);
        } else {
            reject(`El parametro ${parametro} no es un numero`);
        }
    });
}

// Promisa2(numero)
//     .then(result => console.log(result))
//     .catch(error => console.error(error));



const Promisa3 = (parametro) => {
    return new Promise((resolve, reject) => {
        if (typeof(parametro) === "number" && parametro >= 0) {
            resolve(`El parametro ${parametro} es un numero Positivo`);
        } else {
            reject(`El parametro ${parametro} no es un numero positivo`);
        }
    });
}

// Promisa3(numero)
//     .then(result => console.log(result))
//     .catch(error => console.error(error));


    Promise.allSettled([Promisa1(numero), Promisa2(numero), Promisa3(numero)]).then((respuesta) => {
        respuesta.map((result) => {
            console.log(result.status);
        })
    });