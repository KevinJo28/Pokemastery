/* eslint-disable react/prop-types */

import { useState } from "react";
import InputSearch from "../components/InputSearch";
import { RenderPokemons } from "../components/RenderPokemons";

export default function Pokedex({setVisiblePokemons, visiblePokemons}) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorInput, setErrorInput] = useState(false)
 
  


    return (
      <>
        <div className="mainPokedex">
          <InputSearch setInput={setInput} input={input} />
          {errorInput ? (
            <>
              <div className="error">
                <h2>El Pokémon que buscas no esta en mis datos. Porfavor intenta buscar uno que si exista.</h2>
              </div>
              <img src="\src\images\Not_Found-removebg-preview.png" alt="No cargo" />
            </>
          ) : null}

          <div className="containerPokemon">
            <RenderPokemons
              input={input}
              loading={loading}
              setLoading={setLoading}
              errorInput={errorInput}
              setErrorInput={setErrorInput}
              visiblePokemons={visiblePokemons}
              setVisiblePokemons={setVisiblePokemons}
            />
          </div>
        </div>
      </>
    );
  }
  
