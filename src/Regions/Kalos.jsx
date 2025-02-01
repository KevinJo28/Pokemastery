export default function Kalos() {
    return (
      <div className="containerRegions">
        <div className="containerAlola">
          <section className="part1">
            <img src="/src/images/mapaKalos.png" alt="mapaAlola" />
            <h1 className="nameRegion">Kalos</h1>
          </section>
          <section className="part2">
            <h2>History:</h2>
            <p>
            Kalos is a region inspired by France, showcasing elegance, beauty, and innovation. Known for its fashion, food, and art, Kalos also harbors secrets of Mega Evolution. Landmarks like Lumiose City and the Tower of Mastery are central to the region`s charm.
            </p>
            <section className="part3" style={{ display: "flex" }}>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Professor:</h2>
                <p>Professor Sycamore</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>League:</h2>
                <p>Pokémon League (near Victory Road)</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Villains:</h2>
                <p>Team Flare</p>
              </div>
              
            </section>
            <section className="part4" >
            <h2>Starters</h2>
            <img className="starters"
              src="/src/images/inicialesKalos.png"
              alt="startersAlola"
            />

            </section>
            
          </section>
        </div>
      </div>
    );
  }
  