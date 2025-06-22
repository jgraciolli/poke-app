import './pokemons.css'
import ContainerDesktop from '../containers/desktop/ContainerDesktop'
import PokemonCard from './card/PokemonCard'
import { getAllPokemons } from '../pokeService'
import { useEffect, useState } from 'react'

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        try {
            const getPokemons = async () => {
                const data = await getAllPokemons()                     
                setPokemons(data)
            }

            getPokemons()       
        } catch (err) {
            console.log(err)
        }        
    }, [])

    return(        
        <>
            <ContainerDesktop 
                title={ <h1>Todos os pokemons</h1> }
            >
                <div className='all-pokemons-container'>
                    {pokemons.map((value) => (
                        <PokemonCard key={value.name} pokemon={value} />
                    ))}
                </div>                                
            </ContainerDesktop>           
        </>        
    )
}

export default Pokemons