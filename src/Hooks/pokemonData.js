let URL = "https://pokeapi.co/api/v2/pokemon/";
for (let i = 1; i <= 5; i++) {
  fetch(URL + i)
    .then((Response) => Response.json())
    .then((datas) => { 
      mostrarPokemon(datas);
  
  }); 
}

function mostrarTipo(datas) {
  let typesPokemon = [];
  if (datas.types.length === 1) {
    typesPokemon[0] = datas.types[0].type.name;
  } else {
    typesPokemon[0] = datas.types[0].type.name;
    typesPokemon[1] = datas.types[1].type.name;
  }
  return typesPokemon;
}

export function mostrarPokemon(datas) {   
    return {
        mostrarTipo: mostrarTipo(datas),
        mostrarIMG: datas.sprites.other['official-artwork'].front_default,
        mostrarNombre: datas.name,
        mostrarID: datas.id
    }
    
    
}


 
