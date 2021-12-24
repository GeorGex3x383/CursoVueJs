<template>
    <h2>{{customTitle}}</h2>
    <p>{{counter}} <sup>2</sup> = {{squareCounter}}</p>

    <div>
        <button v-on:click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        start: {
            type: Number,
            //required: true
            default: 100,
            validator(value){
                return value > -1
            }
        }
    },
    data(){
        return{
            counter: this.start
        }
    },
    methods:{
        getSquareValue(){
            return this.counter * this.counter
        },
        increase(){
            return this.counter ++
        },
        decrease(){
            return this.counter --
        }
    },
    computed:{
        squareCounter(){
            return this.counter * this.counter
        },
        customTitle(){
            return this.title || 'Counter'
        }
    }
}
</script>

<style>
    button{
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: darkslateblue;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }
    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
</style>
