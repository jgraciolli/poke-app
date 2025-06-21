import axios from "axios";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'
axios.defaults.responseType = 'json'

export const getAllPokemons = async () => {
    try {
        const res = await axios.get('pokemon')
        return res.data 
    } catch (err) {
        console.log(err)
    }    
}

export const getPokemonByNameOrId = async (value) => {
    try {
        const res = await axios.get(`pokemon/${value}`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}