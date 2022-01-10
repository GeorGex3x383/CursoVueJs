import {shallowMount, mount} from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount(PokemonPage)
    })

    test('debe de llamar mixPokemonArr al montar', () => {

        const mixedPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixedPokemonArray')
        shallowMount(PokemonPage)
        expect(mixedPokemonArraySpy).toHaveBeenCalled()

    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {

        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('debe de mostrar los componentes de PokemonPicture y PokemonOption', () => {

        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()

        expect(picture.attributes('pokemonid')).toBe('1')
        expect(options.attributes('pokemons')).toBeTruthy()

    })

    test('pruebas con checkAnswer', async() => {

        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correcto, el pokemón era ${pokemons[0].name}`)
        await wrapper.vm.checkAnswer(10)
        expect(wrapper.vm.message).toBe(`Incorrecto, el pokemón era ${pokemons[0].name }`)

    })

})