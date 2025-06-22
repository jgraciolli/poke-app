import './pokemon-card.css'

const PokemonCard = ({pokemon}) => {
    return(
        <>
            <div className='card-container'>
                <h1 className='pokemon-name'>{pokemon.name}</h1> <br />
                <h3 className="pokemon-height">{pokemon.height}</h3> <br />
                <h3 className="pokemon-weight">{pokemon.weight}</h3> <br />
            </div>    
        </>
    )
}

export default PokemonCard