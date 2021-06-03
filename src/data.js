

export function filtroTipoCampeon(tag, datos) {
  let filtroCampeones = datos.filter((item) => item[1].tags.includes(tag));
  return filtroCampeones
}
function suma (a,b){
  return a+b 
}
suma(2,3)
//funcion para ordenar los campeones de A-Z y de Z-A

export function sortJSON(data, key, orden) {
  const result = data.sort(function (a, b) {
      let x = a[key], y = b[key];

      if (orden === 'asc') {
          return((a[key] < b[key]) ? -1 : ((x > y ? 1 : 0)))
      } 

      // if (x < y){
      //   return -1
      // } else { 
      //   if (x > y){
      //     return 1
      //   }
      //   return 0
      // }

      if (orden === 'desc') {
          return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
      
    });
    return result
    }

// sortData(data, sortBy, sortOrder)
// Debo recibir la data e iterar sobre cada uno de sus elementos segun la propiedad (sortBy) que me entreguen
// Según el sortOrder debo:
// 'ASC' ordenar los elementos segun el key de la a a la z
// 'DESC' ordenar los elementos segun el key de la a a la z

