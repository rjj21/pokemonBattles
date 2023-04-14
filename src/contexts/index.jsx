import React, { useState, useContext, createContext } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [battlePokemon, setBattlePokemon] = useState([])
    

    return (
        <PokemonContext.Provider value={{ battlePokemon, setBattlePokemon }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = () => useContext(PokemonContext);