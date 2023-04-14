import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import * as Pages from './pages'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="pokemons" element={<Pages.PokemonsPage />} />
        <Route path="pokemons/:id" element={<Pages.PokemonPage />} />
        <Route path="battle" element={<Pages.BattlePage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
