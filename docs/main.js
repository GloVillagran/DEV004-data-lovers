import { tarjetaDataString, ordenarArregloNumero, cortarTop, filtrarTipos, buscarPorNombre, ordenarAlfabeticamenteAscendente, ordenarAlfabeticamenteDescendente,calculoPorcentaje, calcularPromedioPorTipo } from './data.js';
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
const menuEstadistica = document.getElementById("menuEstadistica")

menuEstadistica.addEventListener("click", () => {
  //que aparezca la tablas
  bloqueTarjetas.innerHTML = `
  <div class="estadistica">
        <h2>ESTADISTICA DE TIPOS</h2>
        <table>          
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Cantidad Total</th>
              <th>% del Total</th>
              <th>Promedio Ataque</th>
              <th>Promedio Defensa</th>
              <th>Promedio de Puntos de Salud (HP)</th>
            </tr>
          </thead>          
          <tbody id="tablaContenido">           
                      
          </tbody>
        </table>
      </div>
  `
  const tablaContenido = document.getElementById("tablaContenido")
  
  //construir funciones para cantidad, porcentaje, promedio ataque, promedio defensa, promedio de puntos de vida
  //Construir arreglo de objetos antes de pintar
  const miContenido =[]
  for(const mitipo of tipoPokemon){
    const arregloTipos=filtrarTipos(data,mitipo.name)
    //calculo porcentaje porcentaje=(cantidadTipo/totalPokemon)x100
    const dataCalculada=calculoPorcentaje(arregloTipos.pokemon.length,data.pokemon.length)
    const promedioAtaque = calcularPromedioPorTipo(data.pokemon, mitipo.name, 'base-attack') //llamado a la función de acuerdo al parametro que se quiere calcular
    const promedioDefensa = calcularPromedioPorTipo(data.pokemon, mitipo.name, 'base-defense') 
    const promedioPuntosDeSalud = calcularPromedioPorTipo(data.pokemon, mitipo.name, 'max-hp') 
    miContenido.push(
      {
        tipo: mitipo.innerHTML,
        cantidad:arregloTipos.pokemon.length,
        porcentaje:dataCalculada,
        promedioAtaque:promedioAtaque,
        promedioDefensa:promedioDefensa,
        promedioHP:promedioPuntosDeSalud
      }
    )
  }

  //pintar arreglo de objetos
  for(const elemento of miContenido ){
    tablaContenido.innerHTML += `
      <tr>
        <td>${elemento.tipo}</td>
        <td>${elemento.cantidad}</td>
        <td>${elemento.porcentaje}%</td>
        <td>${elemento.promedioAtaque}</td>
        <td>${elemento.promedioDefensa}</td>
        <td>${elemento.promedioHP}</td>
      </tr>
  `
  }
})

//para ocultar menu filtrar cuando se hace clic a un tipo
for (const tipo of tipoPokemon) {
  tipo.addEventListener("click", () => {
    menuTipos.style.display = 'none'
    const pokemonesTipo = filtrarTipos(data, tipo.name)
    bloqueTarjetas.innerHTML = tarjetaDataString(pokemonesTipo)
  })
}

//para ocultar menu ordenar cuando se hace clic a un item
for (const item of menuOrdenar) {
  item.addEventListener("click", () => {
    item.parentElement.parentElement.style.display = 'none'
    if (item.name === "defecto") {
      bloqueTarjetas.innerHTML = tarjetaDataString(dataDefecto);
    }

    if (item.name === "AZ") {
      const ordenarPokemones = ordenarAlfabeticamenteAscendente(data, item.name)
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

  elemento.addEventListener('click', () => {
    elemento.firstElementChild.nextElementSibling.style.display = i === 0 ? 'flex' : 'block'
  })
}

const inputBuscar = document.getElementById("inputBuscar")
inputBuscar.addEventListener('input', () => {
  const FiltroNombre = buscarPorNombre(data, inputBuscar.value)
  bloqueTarjetas.innerHTML = tarjetaDataString(FiltroNombre)
});



