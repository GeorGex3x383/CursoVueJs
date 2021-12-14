
// function saludar(nombre){
//     return `Hola ${nombre}` 
// }

// const saludar = (nombre) => {
//     return `Hola ${nombre}` 
// }

const saludar = (nombre) => `Hola ${nombre}`

const nombre = 'Tony'

console.log(saludar(nombre));

const getUser = () =>{
    return{
        id: 'ABC123',
        username: 'Tony001'
    }
}

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

//const existe = heroes.some((heroe) => heroe.id ===1);
const heroe = heroes.find((heroe) => heroe.id ===1);

console.log(getUser());
console.log(heroe);


