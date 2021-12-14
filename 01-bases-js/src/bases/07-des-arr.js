
const personajes = ['Mario', 'Luigi', 'Peach', 'Toad']

const [m, l, p, toad = 'No tiene valor'] = personajes

const returnArray = (arr) => {
    return[arr[0], arr[1]]
}

const [letras, numeros] = returnArray(['XYX', 925])

console.log(letras, numeros);