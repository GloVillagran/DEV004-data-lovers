import { example, anotherExample, tarjetaDataString } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
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


describe('tarjetaDataString', () => {
  it('es funcion', () => {
    expect(typeof tarjetaDataString).toBe('function');
  });

  it('returns `tarjetaDataString`', () => {
    expect(typeof tarjetaDataString(data)).toBe('string');
  });
});