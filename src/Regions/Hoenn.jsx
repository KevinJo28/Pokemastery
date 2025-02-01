export default function Hoenn() {
    return (
      <div className="containerRegions">
        <div className="containerAlola">
          <section className="part1">
            <img src="/src/images/mapaHoenn.png" alt="mapaAlola" />
            <h1 className="nameRegion">Hoenn</h1>
          </section>
          <section className="part2">
            <h2>History:</h2>
            <p>
            Hoenn is a tropical region known for its vast seas and diverse ecosystems. The region is famous for its environmental themes, with conflicts between Team Aqua and Team Magma, who seek to expand the oceans and continents respectively. Legendary Pokémon Kyogre and Groudon play central roles in these conflicts.
            </p>
            <section className="part3" style={{ display: "flex" }}>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Professor:</h2>
                <p>Professor Birch</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>League:</h2>
                <p>Ever Grande City</p>
              </div>
              <div style={{ padding: "20px", paddingLeft: "0" }}>
                <h2>Villains:</h2>
                <p>Team Aqua, Team Magma</p>
              </div>
              
            </section>
            <section className="part4" >
            <h2>Starters</h2>
            <img className="starters"
              src="/src/images/inicialesHoenn.png"
              alt="startersAlola"
            />

            </section>
            
          </section>
        </div>
      </div>
    );
  }
  