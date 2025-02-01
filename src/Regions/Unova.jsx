export default function Unova() {
    return (
      <div className="containerRegions">
        <div className="containerAlola">
          <section className="part1">
            <img src="/src/images/mapaTeselia.png" alt="mapaAlola" />
            <h1 className="nameRegion">Unova</h1>
          </section>
          <section className="part2">
            <h2>History:</h2>
            <p>
            Unova is a modern, urbanized region inspired by New York City. It features bustling cities like Castelia and Nimbasa, alongside natural wonders like Pinwheel Forest and Dragonspiral Tower. Team Plasma seeks to liberate Pokémon, while its leader, N, harbors deeper ambitions.
            </p>
            <section className="part3" style={{ display: "flex" }}>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Professor:</h2>
                <p>Professor Juniper</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>League:</h2>
                <p>Pokémon League (near Victory Road)</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Villains:</h2>
                <p>Team Plasma</p>
              </div>
              
            </section>
            <section className="part4" >
            <h2>Starters</h2>
            <img className="starters"
              src="/src/images/inicialesUnova.png"
              alt="startersAlola"
            />

            </section>
            
          </section>
        </div>
      </div>
    );
  }
  