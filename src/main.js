//import { formularioFiltrado } from './data.js';
import data from './data/lol/lol.js';
import { filtroTipoCampeon } from './data.js'


/*//Prueba
 const obj = data;
const campeonLol = Object.keys(obj.data)
console.log(campeonLol)
let misCampeon = campeonLol.map()*/


//console.log(example, data);
// para tener la data en un array 
let mostrarCampeon = document.getElementById("misCampeones")
mostrarCampeon.addEventListener("click", ocultarP)
function ocultarP (){
document.querySelector("#inicio").style.display = "none";

}

const obj = data;
const campeonLol1 = Object.entries(obj.data);

function quieroSoloFiltro(){
for (let i = 0; i < campeonLol1.length; i++) {
  const todoCampeon = campeonLol1[i][1];
  console.log(todoCampeon)
}
}
//para las card para mostrar todos los Campeones 

mostrarCampeon.addEventListener("click", () => {
  mostrarDatos(campeonLol1)
});

function mostrarDatos(listaCampeones) {
  let campeones = document.getElementById('misCampeones');
  //console.log(misCampeones2);
  let element = ''
  listaCampeones.forEach(item => {
    // console.log(item);
    element += `
 <article class="card flex modal">
 <div id="section1" class="container section1"></div>
 <img src=${item[1].splash} alt="" class="card img"></div>
 <div class="card-contet">
   <h5> ${item[1].name}</h5>
   <h5>${item[1].tags}</h5> <p>
  </div>

</article>`

  });
  return campeones.innerHTML = element;
}
/*  <ul>
  
   <h5>${item[1].tags}</h5> <p>
${item[1].blurb}
<li> Ataque ${item[1].info.attack}</li>
  <li> Defensa ${item[1].info.defense}</li>
  <li> Dificulta ${item[1].info.difficulty}</li>
  <li>Magico ${item[1].info.magic}</li>
   </ul>
</p>*/

//console.log(mostrarDatos)

//para el formulario para buscar la data de forma 
const formulario = document.getElementById('formulario');
const inputTexto = document.getElementById('inputTexto');

let ob1 = data;
let misCampeones3 = Object.entries(ob1.data);
inputTexto.addEventListener('input', e => {
  e.preventDefault()

  const textoCamp = inputTexto.value.toLowerCase()
  const formularioFiltrado = misCampeones3.filter(item => {
    const textoApi = item[1].name.toLowerCase()
    if (textoApi.indexOf(textoCamp) !== -1) {
      return item
    }
  });

  mostrarDatos(formularioFiltrado)

});


function botonaZ() {
  let camp = data;
  let ordenarCamp = Object.entries(camp.data);
  ordenarCamp.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
  })
  mostrarDatos(ordenarCamp);
}
//funcion para ordenar los campeones de Z a A
function botonZa() {
  let camp1 = data;
  let ordenarCamp1 = Object.entries(camp1.data);

  const misCampeonesOrden = ordenarCamp1.reverse();
  mostrarDatos(misCampeonesOrden)
}

function botonesOrden() {
  let ordenAZ = document.getElementById("botonOrdenar");
  let ordenZA = document.getElementById("botonZA");

  if (ordenAZ === botonaZ()) {

  } else botonZa();
  ordenZA.value
}

//para recorrer el array de objetos y solo obtener campeones por rol 

let opcionCamp = document.getElementById("filtroSelect")
opcionCamp.addEventListener("change", organizarCampeon);

function organizarCampeon(tipos){
  let target = tipos.target.value
 //console.log(filtroTipoCampeon(target,mostrarDatos));
mostrarDatos(filtroTipoCampeon(target,campeonLol1))
}


