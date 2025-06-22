import '../styles/css/home.css'

const Home = () => {
    return(
        <>
            <header className="home-header">
                <h1>Bem-vindo(a) ao Poké App!</h1>                
            </header>
            <main className="home-container">
                <h2>Aqui você pode navegar e conhecer todos os pokémons!</h2>
                <br />            
                <button className="home-button">
                    <a href="/pokemons">Começar</a>    
                </button>            
            </main>   
        </>
    )
}

export default Home