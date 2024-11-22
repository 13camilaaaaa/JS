/**Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
resuelta" cuando se cumpla.
 */

const mipromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resuelta");
        }, 3000);
    });
}

mipromesa.then((mensaje) => {
    console.log(mensaje);
})