import '../../../../styles/css/containers/desktop/buttons/buttons.css'

const Buttons = () => {
    return(
        <>
            <div className="buttons-container">
                <button className="all-button">
                    <a href="/pokemons"><p>Todos os pokemons</p></a>
                </button>                                
                <button className="favorite-button">
                    <a href="/favorites"><p>Favoritos</p></a>
                </button>      
            </div>                    
        </>
    )
}

export default Buttons