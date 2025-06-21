import './pokemons.css'
import '../App.css'
import ContainerDesktop from '../containers/desktop/ContainerDesktop'
import PokemonCard from './card/PokemonCard'
import { getAllPokemons } from '../pokeService'
import { useEffect, useState } from 'react'

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
            const data = await getAllPokemons()
            setPokemons(data.results)
        }

        getPokemons()
    }, [])

    return(        
        <>
            <ContainerDesktop 
                title={ <h1>Todos os pokemons</h1> }
            >
                {pokemons.map((value) => (
                    <PokemonCard key={value.name} pokemon={value} />
                ))}
                
            </ContainerDesktop>           
        </>        
    )
}

export default Pokemons