/**Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto. */


let numero = 0;

numero = parseFloat(prompt("Ingresa un numero, Por favor"));

if (isNaN(numero)) {
    console.error("Por favor, ingresa un numero valido");
}
else {

    const promesa1 = (valor) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(valor);
            }, 1000);
        });
    }

    const promesa2 = (valor) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(valor);
            }, 2000);
        });
    }

    const promesa3 = (valor) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(valor);
            }, 3000);
        });
    }


    Promise.all([promesa1(numero), promesa2(numero), promesa3(numero)]).then((resultados) => {
        console.log(resultados);
        
    });
}