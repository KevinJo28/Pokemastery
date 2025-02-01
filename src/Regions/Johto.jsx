export default function Johto() {
    return (
      <div className="containerRegions">
        <div className="containerAlola">
          <section className="part1">
            <img src="/src/images/mapaJohto.png" alt="mapaAlola" />
            <h1 className="nameRegion">Johto</h1>
          </section>
          <section className="part2">
            <h2>History:</h2>
            <p>
            Johto is a region deeply rooted in tradition and mythology, closely connected to Kanto. It features sacred towers, such as the Bell Tower and Burned Tower, and is home to legendary Pokémon like Ho-Oh and Lugia. Johto emphasizes balance between nature and human development.
            </p>
            <section className="part3" style={{ display: "flex" }}>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Professor:</h2>
                <p>Professor Elm</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>League:</h2>
                <p>Indigo Plateau</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Villains:</h2>
                <p>Team Rocket</p>
              </div>
              
            </section>
            <section className="part4" >
            <h2>Starters</h2>
            <img className="starters"
              src="/src/images/inicialesJohto.png"
              alt="startersAlola"
            />

            </section>
            
          </section>
        </div>
      </div>
    );
  }
  