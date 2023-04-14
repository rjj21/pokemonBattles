import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { usePokemon } from '../../contexts';

export default function PokemonCard({pokemon}) {
    const {battlePokemon, setBattlePokemon} = usePokemon()
    const nav = useNavigate()

    // const saveBattlePokemon = () => {
    //     setBattlePokemon(pokemon)
    //     nav('/battle')
    // }

    function getTypeColour(type) {
        switch (type) {
            case 'normal':
                return '#FBF0E2';
            case 'fighting':
                return '#FF2218';
            case 'flying':
                return '#CDA6F2';
            case 'poison':
                return '#A853F7';
            case 'ground':
                return '#F8D39D';
            case 'rock':
                return '#E9AE5C'; 
            case 'bug':
                return '#C3F39B';
            case 'ghost':
                return '#7D6D98';
            case 'steel':
                return '#EAE4F4';
            case 'fire':
                return '#F39314';
            case 'water':
                return '#55A6F5';
            case 'grass':
                return '#93EF36';  
            case 'electric':
                return '#E3E925';
            case 'psychic':
                return '#FA53B2';
            case 'ice':
                return '#69FFE6';
            case 'dragon':
                return '#5A33FD';
            case 'dark':
                return '#6D4D16';
            case 'fairy':
                return '#EEA6F3';  
            default:
                return '#FFFFFF';
        }
    }

    return (
        <div className='poke-card'>
            <h2><Link to={`/pokemons/${pokemon.id}`} >{pokemon.name}</Link></h2>
            <p>{pokemon.id}</p>
            <img src={pokemon.sprites.other["official-artwork"].front_default} className='poke-img'/>
            <div >
                <p>Types:</p>
                {pokemon.types.map(type => <p style={{backgroundColor: getTypeColour(type.type.name)}}>
                    {type.type.name}</p>)}
            </div>
        </div>
    )
}
