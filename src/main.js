import { sortJSON, filtroTipoCampeon } from './data.js';
import data from './data/lol/lol.js';

let cleidy = {
  age: 29,
  hobby: "pelicula",
  apellido: "belizario",
  favs : {
    comida: ["pizza","papas" ],
    bebida: "limonada",
    dulce: "chocolate",
    numero:  14,
  }
}

console.log(cleidy.favs.comida[1]);
console.log(cleidy['age']);


const obj = data;
const campeonLol1 = Object.entries(obj.data);
console.log(campeonLol1);

/* //Prueba
const obj = data;
const campeonLol = Object.keys(obj.data)
console.log(campeonLol)
let misCampeon = campeonLol.map()*/


//console.log(example, data);
// para tener la data en un array 
let mostrarCampeon = document.getElementById("misCampeones")
mostrarCampeon.addEventListener("click", ocultarP)

function ocultarP() {
  document.querySelector("#inicio").style.display = "none";

}

var arr = [1, 2, 6, 5, 10];
arr = arr.sort()
console.log(arr)
//console.log(campeonLol1)
/*function quieroSoloFiltro(){
for (let i = 0; i < campeonLol1.length; i++) {
  const todoCampeon = campeonLol1[i][1];
  console.log(todoCampeon)
}
}*/
//para las card para mostrar todos los Campeones 

mostrarCampeon.addEventListener("click", () => {
  mostrarDatos(campeonLol1)
});

/*------ Mostrar campeones -------*/

function mostrarDatos(listaCampeones) {
  let campeones = document.getElementById('misCampeones');
  //console.log(misCampeones);
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
//const formulario = document.getElementById('formulario');
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

//para ordenar los campeones 
// ordenarAsc, ordenarDesc

function ordenarData(e) {
  let opcion = e.target.value
  console.log(opcion)
  if (opcion === "asc") {
    mostrarDatos(campeonLol1)
  } else {
    console.log(sortJSON(campeonLol1, "name", "desc"));
  }

}


/* Se agrega el evento change al select de ordenar */
let orderCamp = document.z;
orderCamp.addEventListener("change", ordenarData);

//para recorrer el array de objetos y solo obtener campeones por rol 

let opcionCamp = document.getElementById("filtroSelect")
opcionCamp.addEventListener("change", organizarCampeon);

function organizarCampeon(tipos) {
  let target = tipos.target.value
  if (target === "todos") {
    mostrarDatos(campeonLol1)
  } else {
    mostrarDatos(filtroTipoCampeon(target, campeonLol1))
  }
  //console.log(filtroTipoCampeon(target,campeonLol1));
}



let users = [
  { name: 'Scotty', age: '18' },
  { name: 'Tommy', age: '21' },
  { name: 'Sally', age: '71' },
  { name: 'Billy', age: '18' },
  { name: 'Timmy', age: '21' }
];
