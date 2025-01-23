import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonAbilities from "../components/PokemonAbilities";
import PokemonMoves from "../components/PokemonMoves";

export default function Pokemon() {
  const { id } = useParams(); // Obtener ID del Pokémon desde la URL
  const [pokemon, setPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        // Obtener datos del Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);

        // Obtener cadena de evoluciones
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();
        const evolutionResponse = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionResponse.json();

        // Procesar la cadena de evoluciones
        const chain = [];
        let queue = [evolutionData.chain]; // Usaremos una cola para procesar todas las ramas
        
        while (queue.length > 0) {
          const current = queue.shift(); // Tomamos el primer nodo de la cola
          
          // Obtener detalles del Pokémon actual
          const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${current.species.name}`);
          const data2 = await response2.json();
        
          // Agregar Pokémon actual a la cadena
          chain.push({
            name: current.species.name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data2.id}.png`
          });
        
          // Agregar todas las evoluciones a la cola
          queue = queue.concat(current.evolves_to);
        }
        
        setEvolutionChain(chain);
        setLoading(false);
        
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
      
      
    };
    
    
    fetchPokemonDetails();
  }, [id]);
  if (loading) return <h2>Cargando...</h2>;
  
  return (
    <>
      <div className="mainPokemon">
        <div className="pokemon-details">
          <div className="content">
            <section className="sect1">
              <div className="containerPoke">
                <img
                  className="pokemonImg"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
                <h1 className="pokemonName">{pokemon.name}</h1>
              </div>

              <div className="stats">
                <h2>Puntos Base</h2>
                <ul>
                  {pokemon.stats.map((stat) => (
                    <>
                      <section className="statSect" key={Date.now() + 1}>
                        <li key={stat.stat.name} className={stat.stat.name}>
                          {stat.stat.name}
                        </li>
                        <li className="progress">
                          <progress value={stat.base_stat} max={255} />
                        </li>
                        <li>{stat.base_stat}</li>
                      </section>
                    </>
                  ))}
                </ul>
              </div>
            </section>

            <section className="sect2">
              <PokemonAbilities pokemon={pokemon} />
              <div className="Moves">
                <PokemonMoves pokemon={pokemon} />
              </div>
            </section>

            <section className="sect3">
              <div className="evolution">
                <h2>Evoluciones</h2>
                <ul key={Date.now() + 2}>
                  {evolutionChain.map((evo, index) => (
                    <>
                      <div className="pokeEvo" key={index}>
                        <img src={evo.url} alt="a" />
                        <li>{evo.name}</li>
                      </div>
                    </>
                  ))}
                </ul>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </>
  );
}
