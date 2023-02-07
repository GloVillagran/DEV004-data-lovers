// estas funciones son de ejemplo

//import pokemon from "./data/pokemon/pokemon";

export const tarjetaDataString = (data) => {
  let tarjetaString = ""
  for (const pokemon of data.pokemon) {
    tarjetaString += `
      <section class="tarjeta">
        <img class="imagenPokemon" src=${pokemon.img} alt="">
        <p>${pokemon.name}</p>
      </section>
    `
    //console.log(pokemon.name);

  }
  return tarjetaString;
};

export const ordenarArregloNumero = (clave, orden, data) => {
  const dataOrdenada = {}
  if (orden === 'ascendente') {
    dataOrdenada.pokemon = data.pokemon.sort((a, b) => Number(a[clave]) - Number(b[clave]))
  } else {
    dataOrdenada.pokemon = data.pokemon.sort((a, b) => Number(b[clave]) - Number(a[clave]))
  }
  return dataOrdenada;
};

export const cortarTop = (dataOrdenada, top) => {
  const dataTop10 = {}
  dataTop10.pokemon = dataOrdenada.pokemon.slice(0, top)
  return dataTop10;
};

export const filtrarTipos = (data, tipo) => {
  const dataFiltrada = data.pokemon.filter((pokemon) => pokemon.type.includes(tipo))
  console.log(dataFiltrada);
  return { pokemon: dataFiltrada }
}

export const buscarPorNombre = (data, nombreBuscar) => {
  const dataFiltrada = data.pokemon.filter((pokemon) => pokemon.name.startsWith(nombreBuscar))
  return { pokemon: dataFiltrada }
}
//ordenado de la A-Z (codigo para string)
export const ordenarAlfabeticamenteAscendente = (data) => {
  const dataOrdenada = data.pokemon.sort((a, b) => { // a y b son dos parametros que se comparan
    const nameA = a.name.toUpperCase(); // convierte los string a mayusculas para que se ordene alfabeticamente
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) { //a se ordena antes que b
      return -1;
    }
    if (nameA > nameB) { //b se ordena antes que a
      return 1;
    }

    // no hay cambios
    return 0;
  });

  return { pokemon: dataOrdenada }
}

//ordenado de la Z-A
export const ordenarAlfabeticamenteDescendente = (data) => {
  const dataOrdenada = data.pokemon.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    return 0;
  });

  return { pokemon: dataOrdenada }
}
