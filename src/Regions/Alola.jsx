export default function Alola() {
    return (
      <div className="containerRegions">
        <div className="containerAlola">
          <section className="part1">
            <img src="/src/images/mapaAlola.png" alt="mapaAlola" />
            <h1 className="nameRegion">Alola</h1>
          </section>
          <section className="part2">
            <h2>History:</h2>
            <p>
            Alola is an archipelago inspired by Hawaii, embracing a laid-back lifestyle and unique traditions. The region replaces the Pokémon League with island trials and Kahuna battles. Its also home to regional Pokémon forms and Ultra Beasts.
            </p>
            <section className="part3" style={{ display: "flex" }}>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Professor:</h2>
                <p>Professor Kukui</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>League:</h2>
                <p>Mount Lanakila</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Villains:</h2>
                <p>Team Skull, Aether Foundation</p>
              </div>
              
            </section>
            <section className="part4" >
            <h2>Starters</h2>
            <img className="starters"
              src="/src/images/inicialesAlola.png"
              alt="startersAlola"
            />

            </section>
            
          </section>
        </div>
      </div>
    );
  }
  