// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


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
  const dataOrdenada={}
  if(orden==='ascendente'){
    dataOrdenada.pokemon=data.pokemon.sort((a,b)=>Number(a[clave])-Number(b[clave]))
  }else{
    dataOrdenada.pokemon=data.pokemon.sort((a,b)=>Number(b[clave])-Number(a[clave]))
  }
  return dataOrdenada;
};

export const cortarTop = (dataOrdenada,top) => {
  const dataTop10={}
  dataTop10.pokemon=dataOrdenada.pokemon.slice(0,top)
  return dataTop10;
};
