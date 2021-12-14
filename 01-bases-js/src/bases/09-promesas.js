import {getHeroeById} from './bases/08-imp-exp'


// console.log('Inicio');

// new Promise((resolve, reject) => {
//     console.log('Cuerpo de la promesa')
//     reject('Promesa resuelta')
// }).then(console.log).catch(console.log)

// console.log('Fin');

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id)
            if(heroe){
                resolve(heroe)
            } else {
                reject('Heroe no existe')
            }
        }, 1000);
    });
}

getHeroByIdAsync(1).then(h => console.log(h)).catch(console.log)