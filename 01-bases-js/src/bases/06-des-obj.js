
const person = {
    name: 'Tony',
    age: 45,
    codename: 'Ironman',
    power: 'Dinero'
}

const {name, age, codename, power = 'No tiene poder'} = person

// console.log(name);
// console.log(age);
// console.log(codename);
// console.log(power);

const createHero = ({name, age, codename, power}) => {


    return{
        id: 1,
        name,
        age,
        codename,
        power
    }
}

console.log(createHero(person));