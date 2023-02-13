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
  //console.log(dataFiltrada);
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

//funcion para calcular el porcentaje por Tipo
export const calculoPorcentaje = (cantidadTipo,totalPokemon) => {
  const dataCalculada = (cantidadTipo/totalPokemon)*100

  return dataCalculada.toFixed(2)
}

//funcion reduce para calcular promedio de ataque por Tipo
export const calcularPromedioPorTipo = (data, tipo, stat) => {
  //console.log(data)
  //console.log(tipo)
  const dataFiltrada = data.filter(pokemon => pokemon.type.includes(tipo)) //si en el arreglo se incluye el tipo (ej. agua)
  //console.log(dataFiltrada);
  //console.log(typeof dataFiltrada[0].stats)
  //console.log(dataFiltrada[0].stats)
  const sumaAtaques = dataFiltrada.reduce((acc,value) => acc+Number(value.stats[stat]), 0) //se ocupa corchetes para acceder a la propiedad del objeto ya que esta escrita con guión
  return (sumaAtaques/dataFiltrada.length).toFixed(2) //resultado con dos decimales //length para saber la cantidad que hay de esos tipos
}

//funcion reduce para calcular promedio de defensa por Tipo
