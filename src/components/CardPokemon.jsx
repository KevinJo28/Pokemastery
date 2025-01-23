/* eslint-disable react/prop-types */
import Types from "./Types";
import { useNavigate } from "react-router-dom";


const CardPokemon = ({pokemon}) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  const navigate = useNavigate();
      
  
  return (
    
    <div className="pokemon" onClick={()=>{navigate(`/Pokedex/Pokemon/${pokemon.id}`)}}>
    <p className="pokemonid-back">#{pokemon.id}</p>
    <img src={imageUrl} alt={pokemon.name} />
    <div className="pokemonInfo">
      <div className="nombreContenedor">
        <p className="pokemonId">#{pokemon.id}</p>
        <h2 className="pokemonNombre">{pokemon.name}</h2>
      </div>
      <div className="pokemonTipos">
         {pokemon.types.length > 1 ? <Types pokemon={pokemon}/> : <p className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</p>}
      </div>
    </div>
  </div>
  );
}



export default CardPokemon;