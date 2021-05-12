import data from './data/lol/lol.js';

let obj = data;
let lol = Object.entries(obj.data);

export function filtroTipoCampeon (tag) {
  let filtroCampeones = lol.filter((item) => item[1].tags.includes(tag));
  return filtroCampeones

}
    /*    .filter( function(ObjectKey){
            return filterFunction(mainObject[ObjectKey])
        } )
        .reduce( function (result, ObjectKey){
          result[ObjectKey] = mainObject[ObjectKey];
          return result;
        }, {} );*/



// funcion para filtrar por tipo de campeon 

/*export const filtroTipo = (tags, misCampeones) => {
    return misCampeones.filter(miCampeon => miCampeon.);
};*/

//para el formulario 
/*export const formularioFiltrado = lol.filter(item => {
    const textoApi = item[1].name.toLowerCase()
    if (textoApi.indexOf(textoCamp) !== -1) {
      return item
    }
  });*/

  /*export const filtroT = data[1].filter(function(tipo){
    return tipo.tags == "Assassin"
  })*/
 
/*//Recibirá en parámetro el array, la llave y el valor que quieres filtrar y te devolverá el resultado.
export const filtroCampeon = lol.filter = function(mainObject, filterFunction){
  return lol.keys(mainObject)
        .filter( function(ObjectKey){
            return filterFunction(mainObject[ObjectKey])
        } )
        .reduce( function (result, ObjectKey){
            result[ObjectKey] = mainObject[ObjectKey];
            return result;
          }, {} );
}
*/
