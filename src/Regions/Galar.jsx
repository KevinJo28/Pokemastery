export default function Galar() {
    return (
      <div className="containerRegions">
        <div className="containerAlola">
          <section className="part1">
            <img src="/src/images/mapaGalar.png" alt="mapaGalar" />
            <h1 className="nameRegion">Galar</h1>
          </section>
          <section className="part2">
            <h2>History:</h2>
            <p>
            Galar is a region inspired by the United Kingdom, featuring a mix of industrial cities, rural villages, and wild areas. The regions highlight is the Pokémon League, which takes the form of a grand tournament. Dynamax and Gigantamax Pokémon add a new level of excitement.
            </p>
            <section className="part3" style={{ display: "flex" }}>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Professor:</h2>
                <p> Professor Magnolia</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>League:</h2>
                <p> Wyndon Stadium</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Villains:</h2>
                <p>Team Yell, Chairman Rose</p>
              </div>
              
            </section>
            <section className="part4" >
            <h2>Starters</h2>
            <img className="starters"
              src="/src/images/inicialesGalar.png"
              alt="startersAlola"
            />

            </section>
            
          </section>
        </div>
      </div>
    );
  }
  