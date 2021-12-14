
const miPromesa = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            //resolve('Tenemos un valor en la promesa')
            reject('Reject en promesa')
        }, 1000);
    })
}

const medirTiempo = async() => {
    
    try {
        console.log('Inicio');

        const resp = await miPromesa()
        console.log(resp);


        console.log('Fin');
        return 'Fin de MedirTiempo'
    } catch (error) {
        //return 'Catch en medirtiempo'
        throw 'error'
    }
}

medirTiempo().then(valor => console.log(valor)).catch(err => console.log(err))