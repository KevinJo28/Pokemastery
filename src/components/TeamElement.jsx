export default function TeamElement() {

    return (
      <div className="pokemonElement">
        <img src="/src/images/1.png" alt="" />

        <div className="statsPoke">
          <section style={{ display: "flex", gap: "60%" }}>
            <p className="name">Bulbasur</p>
            <p className="lvl">LVL. 25</p>
          </section>
          <section
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <p>HP</p>
            <progress className="hp" value={200} max={255} />
          </section>
          <p className="hpCont"> 200/255</p>
        </div>
      </div>
    );


       
   
}