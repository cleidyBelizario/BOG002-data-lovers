import { example } from './data.js';
import data from './data/lol/lol.js';

console.log(example, data);

// prueba del fetch pintar data en la web uno por uno 
document.getElementById("boton").addEventListener("click", mostrarDatos);
var contenido = document.querySelector('#contenido')
function mostrarDatos (){

    fetch ('./data/lol/lol.json')
    .then (datos => datos.json())
    .then (datos =>{
       /* console.log(datos['0'].data);
            contenido.innerHTML= `
            <img src = "${datos['0'].data.Akali}" width="1000px"
            <p>Nombre= ${datos['0'].data.Akali.tags}</p>`*/
            //for( let indice of datos){
              //  console.log(indice.data)
            for(let i =0; datos.length;i++){
       
            }
        
                                                                                                                                                                                                                                                                                                                                      
    })

};

// funcion para realizar boton hamburguesa
let botonH = document.getElementById("menuT").addEventListener("click", cambiarClase);
function cambiarClase(){
    //alert("dentro del menu");
let siteNav= document.getElementById('site-nav');
siteNav.classList.toggle('site-nav-open');
let menuOpen = document.getElementById('menuT');
menuOpen.classList.toggle('menu-open');
}