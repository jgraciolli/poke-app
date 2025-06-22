import '../../styles/css/pokemon/pokemon-card.css'

const PokemonCard = ({pokemon}) => {
    return(
        <>
            <div className='card-container'>
                <h1 className='pokemon-name'>{pokemon.name}</h1> <br />            
                <button>
                    <a href={`pokemons/${pokemon.id}`}>Detalhes</a>
                </button>
            </div>    
        </>
    )
}

export default PokemonCard