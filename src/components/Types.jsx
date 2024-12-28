/* eslint-disable react/prop-types */

export default function Types({pokemon}) {
  return (
    <section>
     
        <p className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</p> 
        <p className={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</p>
      
      
    </section>
  )
}
