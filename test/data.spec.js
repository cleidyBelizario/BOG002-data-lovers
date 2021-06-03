//import { example, anotherExample } from '../src/data.js';
import { filtroTipoCampeon, sortJSON } from '../src/data.js';


const dataPrueba = [{ "name": "Kindred" }, { "name": "Ahri" }, { "name": "Singed" }];
const ordenAZ = [{ "name": "Ahri" }, { "name": "Kindred" }, { "name": "Singed" }];
const ordenZA = [{ "name": "Singed" },  { "name": "Kindred" }, { "name": "Ahri" }];
const dataDePrueba = [{name: "Ashe", tags:["Mage", "Assassin"], info:{difficulty: 1}},{name: "Alistar", tags:["Fighter", "Tank"]},{name:"Aatrox", tags:["Fighter"], info:{difficulty: 2}}]



describe("sortJSON debería ser una función", () => {
  it("is a function", () => {
    expect(typeof sortJSON).toBe("function");
  });

  it('debería retornar "campeones en orden a-z" para la opción ordenar  con una condicion asc', () => {
    expect(sortJSON(dataPrueba,"name", "asc")).toEqual(ordenAZ);
  });

  it('debería retornar "campeones en orden z-a" para la condicion "desc" ', () => {
    expect(sortJSON(dataPrueba, "name", "desc")).toEqual( ordenZA);
  });
});

describe('filtroTipoCampeon', () => {
  test('is a function', () => {
    expect(typeof filtroTipoCampeon).toBe('function');
  });
  test('`filtroTipoCampeon`', () => {
    expect(typeof filtroTipoCampeon).toBe('function');
    let dataFiltrada = [{name: "Ashe", tags:["Mage", "Assassin"],info:{difficulty: 1}}]
    expect(filtroTipoCampeon("Assassin",dataDePrueba)).toEqual(dataFiltrada);
  });
});



























