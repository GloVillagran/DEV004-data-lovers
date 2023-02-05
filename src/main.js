import { tarjetaDataString } from './data.js';
import data from './data/pokemon/pokemon.js';

const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetaDataString(data)

//Agregando eventos al menu
const tipoPokemon = document.getElementsByClassName("tipoPokemon")
const menuPrincipal = document.getElementsByClassName("menuPrincipal")
const menuTipos = document.querySelector(".menu-tipos")
const menuOrdenar= document.getElementsByClassName("itemOrdenar")
const menuTop= document.getElementsByClassName("itemTop")

//para el menu filtrar tipo historia Nª3
for (const tipo of tipoPokemon) {
  tipo.addEventListener("click", () => {
    //el console seria sustituido por el llamado a funcion que realice el filtrado
    console.log(tipo.name)
    menuTipos.style.display = 'none'
  })
}

//para el menu ordenar para historia Nº2
for(const item of menuOrdenar){
  item.addEventListener("click",()=>{
    //el console seria sustituido por el llamado a funcion que realice el ordenado
    console.log(item.name)
    item.parentElement.parentElement.style.display='none'
  })
}
//para el menu top para historia Nº4
for(const item of menuTop){
  item.addEventListener("click",()=>{
    //el console seria sustituido por el llamado a funcion que devuelva el top10
    console.log(item.name)
    item.parentElement.parentElement.style.display='none'
  })
}

// for(const elemento of menuPrincipal){
for(let i=0;i<menuPrincipal.length;i++){
  const elemento=menuPrincipal[i];
  elemento.addEventListener('mouseenter', () => {
    elemento.firstElementChild.nextElementSibling.style.display = i===0?'flex':'block'
  })
  
  elemento.addEventListener('mouseleave', () => {
    elemento.firstElementChild.nextElementSibling.style.display = 'none'
  })
}

