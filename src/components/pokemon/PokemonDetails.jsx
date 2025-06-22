import '../../styles/css/pokemon/pokemon-details.css'
import ContainerDesktop from '../containers/desktop/ContainerDesktop'
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
            <ContainerDesktop
                title={<h1>Detalhes do {pokemon.name}</h1>}
            >
                <h1>{pokemon.name}</h1> <br />
                <h3>{pokemon.height}</h3> <br />
                <h3>{pokemon.weight}</h3>
            </ContainerDesktop> 
        </>
    )
}

export default PokemonDetails