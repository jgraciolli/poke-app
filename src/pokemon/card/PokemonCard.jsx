import './pokemon-card.css'

const PokemonCard = ({pokemon}) => {
    return(
        <>
            <div className='card-container'>
                <h1 className='pokemon-name'>{pokemon.name}</h1>
            </div>    
        </>
    )
}

export default PokemonCard