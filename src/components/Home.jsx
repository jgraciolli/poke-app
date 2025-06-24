import '../styles/css/home.css';
import Logo from '../assets/logo.png'

const Home = () => {
    return (
        <>
            <main className='home-container'>
                <img src={Logo} alt="PokéApp logo" className="logo" />              
                <h1>Explore todos os Pokémon!</h1>
                <button className="pokeball-button">
                    <a href="/pokemons" className="pokeball-link"></a>
                </button>
            </main>            
        </>
    );
};

export default Home;