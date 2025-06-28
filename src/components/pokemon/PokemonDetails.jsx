import '../../styles/css/pokemon/pokemon-details.css'
import PageLayout from '../containers/desktop/PageLayout'
import { useState, useEffect } from 'react'
import { getPokemonByNameOrId } from '../../pokeService'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
    const {pokemonId} = useParams()
    const [pokemon, setPokemon] = useState({})    

    useEffect(() => {
        console.log(`poke-param: ${pokemonId}`)

        const getPokemonData = async () => {
            const pokemonData = await getPokemonByNameOrId(pokemonId)
            setPokemon(pokemonData)
        }
        
        getPokemonData()
    }, [])

    return(
        <>
            <PageLayout
                title={<h1>Detalhes do {pokemon.name}</h1>}
            >
                <h1>{pokemon.name}</h1> <br />
                <h3>Altura: {pokemon.height / 10}m</h3> <br />
                <h3>Peso: {pokemon.weight /10}kg</h3>
            </PageLayout> 
        </>
    )
}

export default PokemonDetails