/**Crea una función asincrónica que realice una llamada a un archivo local en formato json y luego manipule los datos recibidos para mostrar información específica. */


async function fetchAndProcessData() {
    try {
        
        const response = await fetch('../datos/datos.json');
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.statusText}`);
        }

        const data = await response.json();
        const mayoresDe30 = data.filter(persona => persona.age > 30);
        
        console.log("Usuarios mayores de 30 años:", mayoresDe30);

    } catch (error) {
        console.error("Error al procesar los datos:", error);
    }
}

fetchAndProcessData();
