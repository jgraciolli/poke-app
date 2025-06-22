import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Pokemons from './components/pokemon/Pokemons'
import PokemonDetails from './components/pokemon/PokemonDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='pokemons/:pokemonId' element={<PokemonDetails />}/>                  
        </Routes>        
      </BrowserRouter>      
    </>
  )
}

export default App