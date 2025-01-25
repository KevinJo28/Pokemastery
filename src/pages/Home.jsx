import { useEffect, useState } from "react";
import CardPokemon from "../components/CardPokemon";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Función para obtener los datos de la API
  const fetchPokemonData = async () => {
    try {
      let array = []
      const response1 = await fetch("https://pokeapi.co/api/v2/pokemon/rayquaza");
      const data = await response1.json();
      array[0] = data

      const response2 = await fetch("https://pokeapi.co/api/v2/pokemon/hoopa");
      const data2 = await response2.json();
      array[1] = data2

      const response3 = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
      const data3 = await response3.json();
      array[2] = data3

      const response4 = await fetch("https://pokeapi.co/api/v2/pokemon/tyranitar");
      const data4 = await response4.json();
      array[3] = data4

      const response5 = await fetch("https://pokeapi.co/api/v2/pokemon/celebi");
      const data5 = await response5.json();
      array[4] = data5

      setPokemonList(array)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <>
      <div className="mainHome">
        <Slider />
        <h2 className="h2">Pokemon Destacados</h2>
        {loading ? (
          <h3>Cargando...</h3>
        ) : (
          <div className="pokemonDestacados">
            <CardPokemon className="card2" pokemon={pokemonList[0]} />
            <CardPokemon className="card2" pokemon={pokemonList[1]} />
            <CardPokemon className="card2" pokemon={pokemonList[2]} />
            <CardPokemon className="card2" pokemon={pokemonList[3]} />
            <CardPokemon className="card2" pokemon={pokemonList[4]} />
          </div>
        )}

        <h2 className="h2">News</h2>
        <div className="blogContainer">
          <div
            className="blogPost"
            onClick={() => {
              navigate(`/Blog/Proximos_juegos_de_Pokemon_2025`);
            }}
          >
            <img src="/src/images/Blog1.webp" alt="Image" />
            <section>
              <p className="titulo">
                Próximos Juegos de Pokémon en 2025: Rumores, Novedades y Más
              </p>{" "}
              <p className="date">24/1/2025</p>
            </section>
            <p>
              Descubre los próximos juegos de Pokémon en 2025. Rumores,
              novedades y posibles lanzamientos que los fans de Pokémon no
              querrán perderse. ¡Entérate de todo aquí!
            </p>
          </div>
          <div
            className="blogPost"
            onClick={() => {
              navigate(`/Blog/Proximos_juegos_de_Pokemon_2025`);
            }}
          >
            <img src="/src/images/Blog1.webp" alt="Image" />
            <section>
              <p className="titulo">
                Próximos Juegos de Pokémon en 2025: Rumores, Novedades y Más
              </p>{" "}
              <p className="date">24/1/2025</p>
            </section>
            <p>
              Descubre los próximos juegos de Pokémon en 2025. Rumores,
              novedades y posibles lanzamientos que los fans de Pokémon no
              querrán perderse. ¡Entérate de todo aquí!
            </p>
          </div>
          <div
            className="blogPost"
            onClick={() => {
              navigate(`/Blog/Proximos_juegos_de_Pokemon_2025`);
            }}
          >
            <img src="/src/images/Blog1.webp" alt="Image" />
            <section>
              <p className="titulo">
                Próximos Juegos de Pokémon en 2025: Rumores, Novedades y Más
              </p>{" "}
              <p className="date">24/1/2025</p>
            </section>
            <p>
              Descubre los próximos juegos de Pokémon en 2025. Rumores,
              novedades y posibles lanzamientos que los fans de Pokémon no
              querrán perderse. ¡Entérate de todo aquí!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
