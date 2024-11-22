/**Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
lista de elementos uno por uno. */

const array = ["verde", "rojo", "azul", "amarillo"];

const functionAsincrona = async () => {
    try {
        setTimeout(() => {
            for (let index = 0; index < array.length; index++) {
                const color= array[index];
                console.log(color);
            }
        }, 3000);
    } 
    catch (error) {
        console.log(error);
        
    }
}

functionAsincrona()