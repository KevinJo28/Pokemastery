import { useNavigate } from "react-router-dom"

export default function Regiones() {
  const navigate = useNavigate()
    return (
      <div className="mainBlog">
      <div className="blogContainer">
        <div className="blogPost" onClick={()=>{navigate(`/Regions/Kanto`)}}>
        <img src="/src/images/mapaKanto.png" alt="a" />
          <section><p className="titulo">Kanto</p> <p className="date">(Generation I)</p></section>
          <p>Kanto is the birthplace of the Pokémon journey. This region is known for its pioneering Pokémon Trainers like Red and Blue.</p>
        </div>


        <div className="blogPost" onClick={()=>{navigate(`/Regions/Johto`)}}>
        <img src="/src/images/mapaJohto.png" alt="" />
          <section><p className="titulo">Johto</p> <p>(Generation II)</p></section>
          <p>Johto is known for its rich history and traditions. Trainers face challenges similar to those in Kanto, but with a more mystical and legendary atmosphere.</p>
        </div>


        <div className="blogPost" onClick={()=>{navigate(`/Regions/Hoenn`)}}>
        <img src="/src/images/mapaHoenn.png" alt="" />
          <section><p className="titulo"> Hoenn</p> <p>(Generation III)</p></section>
          <p>Hoenn is a region rich in biodiversity, featuring vast seas, deserts, and forests. The story revolves around the climatic conflict between Team Aqua and Team Magma.</p>
        </div>


        <div className="blogPost" onClick={()=>{navigate(`/Regions/Sinnoh`)}}>
        <img src="/src/images/mapaSinnoh.png" alt="" />
          <section><p className="titulo">Sinnoh</p> <p className="date">(Generation IV)</p></section>
          <p>Sinnoh is known for its mythology and ancient legends. The region focuses on the balance between time and space, with the legendary Pokémon.</p>
        </div>


        <div className="blogPost" onClick={()=>{navigate(`/Regions/Unova`)}}>
        <img src="/src/images/mapaTeselia.png" alt="" />
          <section><p className="titulo">Unova</p> <p>(Generation V)</p></section>
          <p>Unova is a modern, industrialized region inspired by New York City. The main antagonist, Team Plasma, led by N, seeks to liberate Pokémon from human ownership, but their true goal is control.</p>

        </div>



        <div className="blogPost" onClick={()=>{navigate(`/Regions/Kalos`)}}>
        <img src="/src/images/mapaKalos.png" alt="" />
          <section><p className="titulo"> Kalos</p> <p>(Generation VI)</p></section>
          <p>Kalos, inspired by France, focuses on beauty and elegance. The villainous Team Flare aims to create a beautiful world, even at the cost of destroying the existing one using the legendary Pokémon</p>
        </div>


        <div className="blogPost" onClick={()=>{navigate(`/Regions/Alola`)}}>
        <img src="/src/images/mapaAlola.png" alt="" />
          <section><p className="titulo">Alola</p> <p className="date">(Generation VII)</p></section>
          <p>Alola is a tropical region based on Hawaii. Instead of traditional Gyms, Trainers complete Island Trials and face Totem Pokémon.</p>
        </div>


        <div className="blogPost" onClick={()=>{navigate(`/Regions/Galar`)}}>
        <img style={{width:"100%", height:"295px"}} src="/src/images/mapaGalar.png" alt="" />
          <section><p className="titulo">Galar</p> <p>(Generation VIII)</p></section>
          <p>Galar, inspired by the United Kingdom, features a league system akin to sports tournaments. The storyline involves the antagonistic group Team Yell and the enigmatic chairman, Rose, who seeks to harness the power.</p>
        </div>


        <div className="blogPost" onClick={()=>{navigate(`/Regions/Paldea`)}}>
        <img src="/src/images/mapaPaldea.jpg" alt="a" />
          <section><p className="titulo"> Paldea</p> <p>(Generation IX)</p></section>
          <p>Paldea, inspired by the Iberian Peninsula, encourages Trainers to embark on a treasure hunt across an open-world setting. The region features multiple paths, including the traditional Gym Challenge.</p>
        </div>
        
        
      </div>
  </div>
    )
  }
  