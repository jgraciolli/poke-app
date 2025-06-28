import { useNavigate } from 'react-router-dom'
import '../../styles/css/pokemon/pokemon-card.css'

const PokemonCard = ({pokemon}) => {
    const navigate = useNavigate()
    

    return(
        <>
            <div className='card-container'>
                <h1 className='pokemon-name'>{pokemon.name}</h1> <br />            
                <button onClick={() => { navigate(`/pokemons/${pokemon.id}`) }}>
                    Detalhes
                </button>
            </div>    
        </>
    )
}

export default PokemonCard