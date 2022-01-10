import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', ()=>{

    test('axios debe estar configurado con el api de pokémon', ()=>{

        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')

    })

})