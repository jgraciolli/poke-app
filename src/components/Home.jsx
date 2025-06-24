import '../styles/css/home.css';
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <main className='home-container'>
                <img src={Logo} alt="PokéApp logo" className="logo" />              
                <h1>Explore todos os Pokémon!</h1>
                <button className="pokeball-button"
                    onClick={() => navigate('/pokemons')}
                >
                    <span className="pokeball-link" />
                </button>
            </main>            
        </>
    );
};

export default Home;