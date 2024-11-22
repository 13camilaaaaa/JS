/**Crear un objeto proxy usando la clase Proxy */

const persona = {
    nombre: 'Juan',
    apellido: 'Navas',
    edad: 30
}

const manejador = {
    get(objeto, propiedad) {
        console.log(`obteniendo la propiedad (${propiedad})`);
        return objeto[propiedad];
    },
    set(objeto, propiedad, valor) {
        if (Object.keys(objeto).indexOf(propiedad) === -1) {
            return console.error(`la propiedad ${propiedad} no existe`);
        }
        if (propiedad == "nombre" && !/^[a-zA-Z\s]+$/.test(valor)) {
            throw new Error("Este valor solo se ingresan letras y espacios");
        } 
        if (propiedad == "edad" && !/^[0-9]+$/.test(valor)) {
            throw new Error("Este valor solo se ingresan numeros");
        } 
        objeto[propiedad] = valor;
    }
}
const personaProxy = new Proxy(persona, manejador);
personaProxy.nombre = "Ped12o";
personaProxy.carrera = "nada";

console.log(personaProxy.nombre);
console.log(personaProxy.carrera);
console.log(persona);

