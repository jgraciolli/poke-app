import '../../styles/css/pokemon/pokemons.css'
import PageLayout from '../containers/desktop/PageLayout'
import PokemonCard from './PokemonCard'
import { getAllPokemons } from '../../pokeService'
import { useEffect, useState } from 'react'

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        try {
            const getPokemons = async () => {
                const data = await getAllPokemons()
                console.log(data)                     
                setPokemons(data)
            }

            getPokemons()
            console.log(pokemons)       
        } catch (err) {
            console.log(err)
        }        
    }, [])

    return(        
        <>
            <PageLayout 
                title={ <h1>Todos os pokemons</h1> }
            >
                <div className='all-pokemons-container'>
                    {pokemons.map((value) => (
                        <PokemonCard key={value.name} pokemon={value} />
                    ))}
                </div>                                
            </PageLayout>           
        </>        
    )
}

export default Pokemons