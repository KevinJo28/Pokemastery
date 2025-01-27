import { useNavigate } from "react-router-dom"

export default function Blog() {
  const navigate = useNavigate();
    return (
      <div className="mainBlog">
          <div className="blogContainer">
            <div className="blogPost" onClick={()=>{navigate(`/Blog/Upcoming_Pokemon_Games_in_2025`)}}>
              <img src="/src/images/Blog1.webp" alt="Image" />
              <section><p className="titulo">Upcoming Pokémon Games in 2025: Rumors, News, and More</p> <p className="date">24/1/2025</p></section>
              <p>Discover the upcoming Pokémon games in 2025. Rumors, news and possible releases that Pokémon fans wont want to miss. Find out everything here!</p>
            </div>
            <div className="blogPost" onClick={()=>{navigate(`/Blog/Pokemon_theories_2025`)}}>
              <img src="/src/images/pokemon-secrets-theories-2025.webp" alt="pokemon-secrets-theories-2025" />
              <section><p className="titulo">Secrets and Theories Every Pokémon Fan Should Know in 2025</p> <p>25/1/2025</p></section>
              <p>Uncover the most exciting Pokémon secrets and theories stirring fan debates in 2025. From legendary mysteries to hidden lore connections, explore the captivating ideas shaping the Pokémon universe this year.</p>
            </div>
            <div className="blogPost" onClick={()=>{navigate(`/Blog/Top_Pokemon_Favorites_by_Region`)}}>
              <img src="/src/images/Top_Pokemon_Favorites_by_Region.webp" alt="Image" />
              <section><p className="titulo"> Top Pokémon Favorites by Region: Rankings, Rumors, and 2025 Insights</p> <p>25/1/2025</p></section>
              <p>Discover the top Pokémon favorites by region, from Kanto to Paldea. Explore fan polls, rankings, and the latest rumors about upcoming Pokémon trends in 2025.</p>
            </div>
            
          </div>
      </div>
    )
  }
  