import './main-buttons.css'

const MainButtons = () => {
    return(
        <>
            <div className="buttons-container">
                <button className="all-button">
                    <a href="/"><p>Todos os pokemons</p></a>
                </button>                                
                <button className="favorite-button">
                    <a href="/favorites"><p>Favoritos</p></a>
                </button>      
            </div>                    
        </>
    )
}

export default MainButtons