import React, {useEffect, useState} from "react";
import { usePokemon } from "../../contexts";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PokemonPage() {
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState([])
    const {battlePokemon, setBattlePokemon} = usePokemon()
    const { id } = useParams()
    const nav = useNavigate()

    const saveBattlePokemon = () => {
        setBattlePokemon(pokemon)
        nav('/battle')
    }

    useEffect(() => {
        async function loadPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setPokemon(data)
            setLoading(false)
        }

        loadPokemon()
    }, [])

    function displayPokemon() {
        return (<div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.other["official-artwork"].front_default}/>
            <p>Stats:</p>
            <ul>{pokemon.stats.map(stat => 
                <li>{stat.stat.name}: {stat.base_stat}</li>
            )}
            </ul>
            <button type="submit" onClick={saveBattlePokemon}>Battle!</button>
        </div>
            
        )
    }

    return loading ? <h2>loading...</h2> : displayPokemon()
}
