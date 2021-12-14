

import superHeroes, { owners } from '../data/heroes'

export const getHeroeById = (id) => {
    return superHeroes.find(heroe => heroe.id === id)
}

export const getHeroeByOwner = (owner) => {
    return superHeroes.filter(heroe => heroe.owner === owner)
}


// import {getHeroeByOwner, getHeroeById} from './bases/08-imp-exp'

// console.log(getHeroeById(2));
// console.log(getHeroeByOwner('DC'));