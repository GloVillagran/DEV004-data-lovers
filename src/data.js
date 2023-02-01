// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


export const tarjetaDataString = (data) => {
  let tarjetaString = ""
  for (const pokemon of data.pokemon){
    tarjetaString += `
    <section>
        <img src=${pokemon.img} alt="">
        <p>${pokemon.name}</p>
      </section>
    `
    //console.log(pokemon.name);

  }
  return tarjetaString;
};