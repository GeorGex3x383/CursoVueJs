
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'NY',
        ZIP: 2334646,
        latitud: 134567,
        longitud: 2437658
    }
}

const persona2 = {...persona};

persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);



