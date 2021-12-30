<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1 class="fade-in">¿Quién es este pokémon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
        <template v-if="showAnswer" class="fade-in">
            <h2>{{message}}</h2>
            <button @click="newGame">Nuevo Juego</button>
        </template>
    </div>
</template>

<script>

import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data(){
        return{
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixedPokemonArray(){
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(selectedId){
            this.showPokemon = true
            this.showAnswer = true
            if(selectedId === this.pokemon.id){
                this.message = `Correcto, el pokemón era ${this.pokemon.name }`
            } else {
                this.message = `Incorrecto, el pokemón era ${this.pokemon.name }`
            }
        },
        newGame(){
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixedPokemonArray()
        }
    },
    mounted(){
        this.mixedPokemonArray()
    }
}
</script>
