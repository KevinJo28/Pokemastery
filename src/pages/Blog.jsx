import { useNavigate } from "react-router-dom"

export default function Blog() {
  const navigate = useNavigate();
    return (
      <div className="mainBlog">
          <div className="blogContainer">
            <div className="blogPost" onClick={()=>{navigate(`/Blog/Proximos_juegos_de_Pokemon_2025`)}}>
              <img src="/src/images/Blog1.webp" alt="Image" />
              <section><p className="titulo">Próximos Juegos de Pokémon en 2025: Rumores, Novedades y Más</p> <p className="date">24/1/2025</p></section>
              <p>Descubre los próximos juegos de Pokémon en 2025. Rumores, novedades y posibles lanzamientos que los fans de Pokémon no querrán perderse. ¡Entérate de todo aquí!</p>
            </div>
            <div className="blogPost">
              <img src="/src/images/slider1.png" alt="Image" />
              <section><p>Titulo</p> <p>Date</p></section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor nemo cumque adipisci fugiat debitis quos nam numquam. Provident adipisci nesciunt dolorum eius eos. Quo minima perspiciatis quibusdam obcaecati maxime?</p>
            </div>
            <div className="blogPost">
              <img src="/src/images/slider1.png" alt="Image" />
              <section><p>Titulo</p> <p>Date</p></section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor nemo cumque adipisci fugiat debitis quos nam numquam. Provident adipisci nesciunt dolorum eius eos. Quo minima perspiciatis quibusdam obcaecati maxime?</p>
            </div>
            
          </div>
      </div>
    )
  }
  