import axios from './axiosConfig'

export const getAllPokemons = async () => {
    try {
        let res = []

        const obj = await axios.get('pokemon') // esse objeto resgata o nome e URL individual de cada Pokemon
        const pokemons = obj.data.results

        for (const pokemon of pokemons) {
            const pokemonDetails = await getPokemonByURL(pokemon.url)
            res.push(pokemonDetails)       
        }
        
        return res
    } catch (err) {
        console.log(err)
    }    
}

export const getPokemonByURL = async (url) => {
    try {
        const res = await axios.get(url)
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