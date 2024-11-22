/**Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
mostrar solo los nombres que comiencen con "A").
 */

const leer = async () => {
    try {
        const respuesta = await fetch("../datos/datos.json");
        if (!respuesta.ok) throw new Error(`Error en la respuesta: ${respuesta.status}`);
        return await respuesta.json();
    } catch (error) {
        console.error("Error al leer el archivo JSON:", error);
        return [];
    }
};


leer()
    .then(data => {
        const filtro = data.map(item => {
            return {
                ...item,
                nombre: item.nombre.filter(nombre => nombre.startsWith("A"))
            };
        }).filter(item => item.nombre.length > 0);

        console.table(filtro);
    })
    .catch(error => {
        console.error("Error al procesar los datos:", error);
    });

