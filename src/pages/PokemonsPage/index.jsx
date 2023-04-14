import React, {useState} from 'react'
import { PokemonCard } from '../../components'

export default function PokemonsPage() {
  const [pokemons, setPokemons] = useState([])

  async function fetchDetails() {
    let pokelist = []
    for (let i = 1; i <= 6; i++) {
      const randomNumber = Math.floor(Math.random() * 1010)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      const data = await response.json()
      console.log(data.name)
      pokelist.push(data)
      
      }
    setPokemons(pokelist)
    }
    
  return (
    <>
    <button type='submit' onClick={fetchDetails}>Click me!</button>
      <div className='poke-list'>{pokemons.map(pokemon => 
      <PokemonCard pokemon={pokemon} />
      )}</div>
    </>
  )
}
