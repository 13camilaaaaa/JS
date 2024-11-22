/**Usar un proxy para la validación de los valores de propiedades
• Cuando declaremos que el atributo es numérico solo pedimos que ingresen números
• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
letras
• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
correos
• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
fechas
• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
al final de estos y se debe mostrar el error personalizado por consola
 */


const persona = {
    nombre: 'Juan',
    apellido: 'Navas',
    edad: 30,
    fecha_de_nacimiento: "",
    correo: ""
}

const manejador = {

    set(objeto, propiedad, valor) {
        if (Object.keys(objeto).indexOf(propiedad) === -1) {
            return console.error(`la propiedad ${propiedad} no existe`);
        }
        if (propiedad == "nombre" && !/^[a-zA-Z]+$/.test(valor)) {
            throw new Error("Error: Este valor solo se ingresan letras y espacios");
        }
        if (propiedad == "edad" && !/^[0-9]+$/.test(valor)) {
            throw new Error("Error: Este valor solo se ingresan numeros");
        }
        if (propiedad == "apellido"&& !/^[a-zA-Z]+$/.test(valor)) {
            throw new Error("Error: Este valor solo se ingresan letras y espacios");
        }
        if (propiedad == "fecha_de_nacimiento" && !/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(valor) ) {
            throw new Error(`Error: El valor de fecha_de_nacimiento debe estar en formato DD/MM/YYYY.\nY todos sus campos llenos`);
        }
        if (propiedad == "fecha_de_nacimiento") {
            const [dia, mes, anio] = valor.split("/").map(Number);
            const fecha = new Date(anio, mes -1, dia);

            if (fecha > new Date) {
                throw new Error("Error: La fecha de nacimiento no puede estar en el futuro.");
            }
        }
        if (propiedad == "correo" && !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(valor)) {
            throw new Error(`Error: El correo no presenta todos sus caracteres`);
        };
        objeto[propiedad] = valor
    }
}

const proxy = new Proxy(persona, manejador);

proxy.nombre = "cami"
proxy.edad = "30";
proxy.apellido = "Navas";
proxy.fecha_de_nacimiento = "30/12/2023";
proxy.correo = "juan12@gmail.com";


console.log(proxy.nombre);
console.log(proxy.apellido);
console.log(proxy.edad);
console.log(proxy.fecha_de_nacimiento);
console.log(proxy.correo);




