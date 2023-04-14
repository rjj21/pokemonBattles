import React from 'react'
import { useState, useEffect } from 'react'
import { usePokemon } from '../../contexts'
import { PokemonCard } from '../../components'

export default function BattlePage() {
    const {battlePokemon, setBattlePokemon} = usePokemon()
    const [opponentPokemon, setOpponentPokemon] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getOpponent() {
            const id = Math.floor(Math.random() * 1010)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setOpponentPokemon(data)
            setLoading(false)
          }
        
          getOpponent()
    }, [])
    
  function displayBattle() {
    return (
      <div>
        <div><PokemonCard pokemon={battlePokemon}/></div>
        <h1>VS</h1>
        <div><PokemonCard pokemon={opponentPokemon}/></div>
      </div>
    )
  }

  return loading ? <h2>loading...</h2> : displayBattle()
}
