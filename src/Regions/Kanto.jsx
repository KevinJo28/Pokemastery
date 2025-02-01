export default function Kanto() {
    return (
      <div className="containerRegions">
        <div className="containerAlola">
          <section className="part1">
            <img src="/src/images/mapaKanto.png" alt="mapKanto" />
            <h1 className="nameRegion">Kanto</h1>
          </section>
          <section className="part2">
            <h2>History:</h2>
            <p>
            Kanto is the birthplace of the Pokémon journey, featuring iconic towns like Pallet Town, Pewter City, and Cerulean City. It`s a region rich in history and filled with natural landscapes, caves, and landmarks like the Pokémon Tower and Victory Road. The region`s focus is on traditional exploration and battling.
            </p>
            <section className="part3" style={{ display: "flex" }}>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Professor:</h2>
                <p>Professor Oak</p>
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
            <img className="starters2"
              src="/src/images/inicialesKanto.png"
              alt="startersAlola"
            />

            </section>
            
          </section>
        </div>
      </div>
    );
  }
  