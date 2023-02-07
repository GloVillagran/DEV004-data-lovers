import { example, anotherExample, tarjetaDataString, ordenarArregloNumero, filtrarTipos, buscarPorNombre } from '../src/data.js';
//import data from '../src/data/pokemon/pokemon.js';

//data para hacer pruebas 
const data = {
  "pokemon": [
    {
      "num": "001",
      "name": "bulbasaur",
      "pokemon-rarity": "normal",
      "spawn-chance": "0.3",
      "type": [
        "agua",
        "oscuro"
      ],
    },
    {
      "num": "005",
      "name": "venusaur",
      "pokemon-rarity": "normal",
      "spawn-chance": "0.8",
      "type": [
        "oscuro",
        "normal"
      ],
    },
    {
      "num": "007",
      "name": "squirtle",
      "pokemon-rarity": "normal",
      "spawn-chance": "0.1",
      "type": [
        "dragon",
        "oscuro"
      ]
    },
    {
      "num": "002",
      "name": "charizard",
      "pokemon-rarity": "normal",
      "spawn-chance": "0.35",
      "type": [
        "agua",
        "volador"
      ],
    },
    {
      "num": "009",
      "name": "charmander",
      "pokemon-rarity": "normal",
      "spawn-chance": "0.8",
      "type": [
        "agua",
        "volador"
      ],
    }

  ]
}



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

  it('tarjetaDataString(data) retorna una cadena', () => {
    expect(typeof tarjetaDataString(data)).toBe('string');
  });
});


describe('ordenarArregloNumero', () => {
  it('es funcion', () => {
    expect(typeof ordenarArregloNumero).toBe('function');
  });

  it('ordenarArregloNumero("spawn-chance", "ascendente", data) retorna un objeto', () => {
    expect(typeof ordenarArregloNumero("spawn-chance", "ascendente", data)).toBe('object');
  });

  it('ordenarArregloNumero("spawn-chance", "descendente", data) retorna un arreglo de objetos ordenados por el spawn chance', () => {
    expect(ordenarArregloNumero("spawn-chance", "descendente", data)).toStrictEqual(
      {
        "pokemon": [
         
          {
            "num": "005",
            "name": "venusaur",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.8",
            "type": [
              "oscuro",
              "normal"
            ],
          },
          {
            "num": "009",
            "name": "charmander",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.8",
            "type": [
              "agua",
              "volador"
            ],
          },
          {
            "num": "002",
            "name": "charizard",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.35",
            "type": [
              "agua",
              "volador"
            ],
          },
          {
            "num": "001",
            "name": "bulbasaur",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.3",
            "type": [
              "agua",
              "oscuro"
            ],
          },
          {
            "num": "007",
            "name": "squirtle",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.1",
            "type": [
              "dragon",
              "oscuro"
            ]
          },
        ]
      });
  });
});


describe('filtrarTipos', () => {
  it('es funcion', () => {
    expect(typeof filtrarTipos).toBe('function');
  });

  it('filtrarTipos(data, tipo) retorna un objeto', () => {
    expect(typeof filtrarTipos(data, "oscuro")).toBe('object');
  });

  it('filtrarTipos(data,tipo) retorna un arreglo de objetos filtrados', () => {
    expect(filtrarTipos(data, "oscuro")).toStrictEqual(
      {
        "pokemon": [
         
          {
            "num": "005",
            "name": "venusaur",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.8",
            "type": [
              "oscuro",
              "normal"
            ],
          },
        
          {
            "num": "001",
            "name": "bulbasaur",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.3",
            "type": [
              "agua",
              "oscuro"
            ],
          },
          {
            "num": "007",
            "name": "squirtle",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.1",
            "type": [
              "dragon",
              "oscuro"
            ]
          },
        ]
      });
  });
});

describe('buscarPorNombre', () => {
  it('es funcion', () => {
    expect(typeof buscarPorNombre).toBe('function');
  });

  it('buscarPorNombre(data, nombreBuscar) retorna un objeto', () => {
    expect(typeof buscarPorNombre(data, "ch")).toBe('object');
  });

  it('buscarPorNombre(data, nombreBuscar) retorna los pokemones que coinciden con las primeras letras de su nombre', () => {
    expect(buscarPorNombre(data, "ch")).toStrictEqual(
      {
        "pokemon": [
          {
            "num": "009",
            "name": "charmander",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.8",
            "type": [
              "agua",
              "volador"
            ],
          },
          {
            "num": "002",
            "name": "charizard",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.35",
            "type": [
              "agua",
              "volador"
            ],
          },
         
        ]
      });
  });
});