/**Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final. */


let numero = 0;

numero = parseFloat(prompt("Ingresa un numero, Por favor"));

if (isNaN(numero)) {
    console.error("Por favor, ingresa un numero valido");
}
else {

    const promesa1 = (valor) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(valor * valor - 11);
            }, 1000);
        });
    }

    const promesa2 = (valor) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Math.pow(valor, 2));
            }, 2000);
        });
    }

    const promesa3 = (valor) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(valor / 2);
            }, 3000);
        });
    }


    Promise.allSettled([promesa1(numero), promesa2(numero), promesa3(numero)]).then((resultados) => {
        let sumatotal = 0;
        resultados.forEach((resultado, index) => {
            if (resultado.status === "fulfilled") {
                console.log(`Promesa ${index + 1} cumplida:`, resultado.value);
                sumatotal += resultado.value;
            } else if (resultado.status === "rejected") {
                console.error(`Promesa ${index + 1} rechazada:`, resultado.reason);
            }
        });
        console.log("Suma total de todas las promesas cumplidas:", sumatotal);
    });
}
