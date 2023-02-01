import { example, tarjetaDataString } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(data.pokemon);
//console.log(data.pokemon[0]);
//console.log(data.pokemon[3].name);

const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetaDataString(data)
/*for (const pokemon of data.pokemon){
    bloqueTarjetas.innerHTML += `
    <section>
        <img src=${pokemon.img} alt="">
        <p>${pokemon.name}</p>
      </section>
    `
    console.log(pokemon.name);

} */
console.log(example, data);
