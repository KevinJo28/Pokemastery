export default function Sinnoh() {
    return (
      <div className="containerRegions">
        <div className="containerAlola">
          <section className="part1">
            <img src="/src/images/mapaSinnoh.png" alt="mapaAlola" />
            <h1 className="nameRegion">Sinnoh</h1>
          </section>
          <section className="part2">
            <h2>History:</h2>
            <p>
            Sinnoh is a mountainous region rich in ancient lore and mythology. It`s said to be the origin of the Pokémon world, with legendary Pokémon like Dialga, Palkia, and Arceus. The region features landmarks such as Mount Coronet and the Spear Pillar.
            </p>
            <section className="part3" style={{ display: "flex" }}>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Professor:</h2>
                <p>Professor Rowan</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>League:</h2>
                <p>Pokémon League (near Sunyshore City)</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Villains:</h2>
                <p>Team Galactic</p>
              </div>
              
            </section>
            <section className="part4" >
            <h2>Starters</h2>
            <img className="starters"
              src="/src/images/inicialesSinnoh.png"
              alt="startersAlola"
            />

            </section>
            
          </section>
        </div>
      </div>
    );
  }
  