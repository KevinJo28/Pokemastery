/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */


/* eslint-disable react/prop-types */

import 'animate.css';

import { useState, useEffect } from "react";
import Types from "./Types";
import { useNavigate } from "react-router-dom";


export function RenderPokemons({input, setLoading, loading, setErrorInput, errorInput, visiblePokemons, setVisiblePokemons}) {
  const [pokemonList, setPokemonList] = useState([])
  const [visibleCount, setVisibleCount] = useState(20); // Cantidad inicial
  const [fullPokemonList, setFullPokemonList] = useState([]);
  const navigate = useNavigate();
 



  const fetchPokemonData = async (newLimit = visibleCount) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${visibleCount}`);
      const data = await response.json();
  
      // Extrae detalles de cada Pokémon individual
      const detailedPokemon = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonDetails = await fetch(pokemon.url);
          return pokemonDetails.json();
        })
      );
  
      // Agregar los nuevos Pokémon al estado existente
      setPokemonList((prevList) => {
        const existingIds = new Set(prevList.map((pokemon) => pokemon.id));
        const uniquePokemons = detailedPokemon.filter(
          (pokemon) => !existingIds.has(pokemon.id)
        );
        return [...prevList, ...uniquePokemons];
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon data:",error);}
  };


  const fetchAllPokemonData = async  () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1010`);
      const data = await response.json();
      setFullPokemonList(data);
    } catch (error) {
      console.error("Error fetching Pokémon data:",error);}
  };
  



useEffect(() => {
  fetchPokemonData(visibleCount);
  
}, [visibleCount]);


useEffect(() => {
  fetchAllPokemonData();
  
}, []);




 
  useEffect(() => {
      if (input === "" || input === undefined) {
        setVisiblePokemons(pokemonList);
        setErrorInput(false)
      }else{
        console.log(input)
        const filtered = fullPokemonList.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(input.toLowerCase())
        );
        loadFilteredPokemonDetails(filtered)
        if(filtered.length === 0){
          setErrorInput(true)
        }else{
          setErrorInput(false)
        }
      }

  
  }, [input, pokemonList, fullPokemonList]);
  
  const loadMorePokemons = (e) => {
    if (input === "") {
      setErrorInput(true)
      console.log(input)
    }
      if (e) {
        e.preventDefault();
        console.log(e.type)
      }
      const newLimit = visibleCount + 20;
      setVisibleCount(newLimit)
    
  };

  const loadFilteredPokemonDetails = async (filteredList) => {
    try {
      const detailedPokemon = await Promise.all(
        filteredList.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        })
      );
      setVisiblePokemons(detailedPokemon);
    } catch (error) {
      console.error("Error loading filtered Pokémon details:",error);
  }
  };



  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <>
         

          {
          visiblePokemons.map((pokemon, index) => (
            
            <div className="pokemon animate__animated animate__zoomIn" key={pokemon.id || index} onClick={()=>{navigate(`/Pokedex/Pokemon/${pokemon.id}`)}}>
              <p className="pokemonid-back">#{pokemon.id}</p>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
              <div className="pokemonInfo">
                <div className="nombreContenedor">
                  <p className="pokemonId">#{pokemon.id}</p>
                  <h2 className="pokemonNombre">{pokemon.name}</h2>
                </div>
                <div className="pokemonTipos">
                  {pokemon.types.length > 1 ? (
                    <Types pokemon={pokemon} />
                  ) : (
                    <p className={pokemon.types[0].type.name}>
                      {pokemon.types[0].type.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
          {input === "" ? <div className="containerButton">
            <button
              type="button"
              className="load-more"
              onClick={loadMorePokemons}
            >
              Cargar más
            </button>
          </div> : null}
            
        </>
      )}
    </>
  );
}





