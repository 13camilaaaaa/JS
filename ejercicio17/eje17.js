/** Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos obtenidos en la consola.*/


async function cargarDatosJsonFetch(archivo) {
    try {
        const response = await fetch(archivo); 
        const datosJson = await response.json(); 
        console.log(datosJson);
    } catch (error) {
        console.error("Error al cargar el archivo:", error);
    }
}


cargarDatosJsonFetch("/datos/datos.json");
