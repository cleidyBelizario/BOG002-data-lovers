//import { example, anotherExample } from '../src/data.js';
import { formularioFiltrado } from '../src/data.js';

//para testear el formulario
describe('filtra los Campeones por nombre', () => {
  it('Akali', () => {
    expect(formularioFiltrado).toBe('function');
  });

  it('returns `formularioFiltrado`', () => {
    expect(formularioFiltrado()).toBe('Akali');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
