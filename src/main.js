import { tarjetaDataString, ordenarArregloNumero, cortarTop, filtrarTipos, buscarPorNombre, ordenarAlfabeticamente, ordenarAlfabeticamenteDescendente } from './data.js';
import data from './data/pokemon/pokemon.js'

//se agrega toda la data con ..., para que se muestre la lista de pokemones de la página principal
const dataDefecto = {
  pokemon: [
    ...data.pokemon
  ]

}
//funciones de apoyo
function top10Aparicion(itemTop) {
  //segun el menu seleccionado se ordenara en forma ascendente o descendente
  const orden = itemTop === 'masAparicion' ? 'descendente' : 'ascendente'
  const clave = 'spawn-chance'
  //paso1: ordenar segun aparicion (spawn-chance)
  //ordenarArregloNumero recibe la clave el criterio de orden y la data
  // retorna el arreglo ordenado segun la clave
  const dataOrdenada = ordenarArregloNumero(clave, orden, data)
  console.log(dataOrdenada)
  //paso2:cortar los 10 primeros
  //recibe la data ordenada y me devuelve los 10 primeros
  const dataTop10 = cortarTop(dataOrdenada, 10)
  //paso3: mostrar los 10 primeros (top10)
  bloqueTarjetas.innerHTML = tarjetaDataString(dataTop10)
}


const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetaDataString(data)

//Agregando eventos al menu
const tipoPokemon = document.getElementsByClassName("tipoPokemon")
const menuPrincipal = document.getElementsByClassName("menuPrincipal")
const menuTipos = document.querySelector(".menu-tipos")
const menuOrdenar = document.getElementsByClassName("menuOrdenar")
const menuTop = document.getElementsByClassName("menuTop")

//para ocultar menu filtrar cuando se hace clic a un tipo
for (const tipo of tipoPokemon) {
  tipo.addEventListener("click", () => {
    //el console seria sustituido por el llamado a funcion que realice el filtrado his1
    console.log(data.pokemon)
    console.log(tipo.name.toString())
    menuTipos.style.display = 'none'
    const pokemonesTipo = filtrarTipos(data, tipo.name)
    bloqueTarjetas.innerHTML = tarjetaDataString(pokemonesTipo)
  })
}

//para ocultar menu ordenar cuando se hace clic a un item
for (const item of menuOrdenar) {
  item.addEventListener("click", () => {
    //el console seria sustituido por el llamado a funcion que realice el ordenado
    console.log(item.name)
    item.parentElement.parentElement.style.display = 'none'
    if (item.name === "defecto") {
      bloqueTarjetas.innerHTML = tarjetaDataString(dataDefecto);
    }

    if (item.name === "AZ") {
      const ordenarPokemones = ordenarAlfabeticamente(data, item.name)
      bloqueTarjetas.innerHTML = tarjetaDataString(ordenarPokemones)
    }
    else if (item.name === "ZA") {
      const ordenarPokemones = ordenarAlfabeticamenteDescendente(data, item.name)
      bloqueTarjetas.innerHTML = tarjetaDataString(ordenarPokemones)
    }
  })
}
//para ocultar  el menu top cuando se hace clic a un item  para historia Nº4
for (const item of menuTop) {
  item.addEventListener("click", () => {
    //el console seria sustituido por el llamado a funcion que devuelva el top10
    console.log(item.name)
    top10Aparicion(item.name)
    item.parentElement.parentElement.style.display = 'none'
  })
}

// como el javascript modificar el style el hover del css ya no funciona
// Añadimos a los 3 menus los eventos cuando entra el mouse y sale el mouse similar al hover
for (let i = 0; i < menuPrincipal.length; i++) {
  const elemento = menuPrincipal[i];
  elemento.addEventListener('mouseenter', () => {
    elemento.firstElementChild.nextElementSibling.style.display = i === 0 ? 'flex' : 'block'
  })

  elemento.addEventListener('mouseleave', () => {
    elemento.firstElementChild.nextElementSibling.style.display = 'none'
  })
}

const inputBuscar = document.getElementById("inputBuscar")
inputBuscar.addEventListener('input', () => {
  //console.log(inputBuscar.value)

  const FiltroNombre = buscarPorNombre(data, inputBuscar.value)
  bloqueTarjetas.innerHTML = tarjetaDataString(FiltroNombre)
});
