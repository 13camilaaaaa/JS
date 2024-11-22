/**Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
"Error: Promise rechazada". */


const rechazo = () => {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            reject("Error: Promise rechazada");
        }, 2000);
    });
    }

rechazo().catch((error) => {
    console.log(error);
});
