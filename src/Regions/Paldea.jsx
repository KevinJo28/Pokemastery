export default function Paldea() {
    return (
      <div className="containerRegions">
        <div className="containerAlola">
          <section className="part1">
            <img src="/src/images/mapaPaldea.jpg" alt="mapaPaldea" />
            <h1 className="nameRegion">Paldea</h1>
          </section>
          <section className="part2">
            <h2>History:</h2>
            <p>
            Paldea is a region inspired by the Iberian Peninsula (Spain and Portugal), featuring a vast open world with distinct biomes. It introduces the Terastal phenomenon, allowing Pokémon to transform their appearance and abilities during battles. The academy at Mesagoza is central to the storyline.
            </p>
            <section className="part3" style={{ display: "flex" }}>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Professor:</h2>
                <p> Professor Sada / Professor Turo</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>League:</h2>
                <p>Pokémon League (Mesagoza)</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Villains:</h2>
                <p>Team Star</p>
              </div>
              
            </section>
            <section className="part4" >
            <h2>Starters</h2>
            <img className="starters"
              src="/src/images/inicialesPaldea.png"
              alt="startersAlola"
            />

            </section>
            
          </section>
        </div>
      </div>
    );
  }
  