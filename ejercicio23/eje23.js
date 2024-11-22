/**Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo. */

const leer = async () => {
    try {
        return await fetch ("/datos/datos.json");
    
    } catch (error) {
        console.log(error);
        
    }   
}

leer().then((respuesta) => {
respuesta.json().then(data => {
    console.log(data);
    console.log(data.ciudad);
    console.log(data.hobbies);
})
})



