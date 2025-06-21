import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getAllPokemons, getPokemonByNameOrId } from './pokeService'
import Pokemons from './pokemon/pokemons'

const pokemons = await getAllPokemons()
console.log(pokemons)

const charizard = await getPokemonByNameOrId('charizard')
console.log(charizard)

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pokemons />} />                  
        </Routes>        
      </BrowserRouter>      
    </>
  )
}

export default App