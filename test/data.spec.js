import { tarjetaDataString, ordenarArregloNumero, filtrarTipos, buscarPorNombre, cortarTop, ordenarAlfabeticamenteAscendente, ordenarAlfabeticamenteDescendente,calculoPorcentaje } from '../src/data.js';
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

const data2 = {
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
    const midata=JSON.parse(JSON.stringify(data))
    expect(typeof ordenarArregloNumero("spawn-chance", "ascendente", midata)).toBe('object');
  });

  it('ordenarArregloNumero("spawn-chance", "descendente", data) retorna un arreglo de objetos ordenados por el spawn chance', () => {
    const midata=JSON.parse(JSON.stringify(data))
    expect(ordenarArregloNumero("spawn-chance", "descendente", midata)).toStrictEqual(
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
          }
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
      });
  });
});


describe('cortarTop', () => {
  it('es funcion', () => {
    expect(typeof cortarTop).toBe('function');
  });

  it('cortarTop(data, top) retorna un objeto', () => {
    expect(typeof cortarTop(data, 3)).toBe('object');
  });

  it('cortarTop(data, top) retorna los 3 primeros', () => {
    expect(cortarTop(data, 3)).toStrictEqual(
      {
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
          }
         
        ]
      });
  });
});


describe('ordenarAlfabeticamenteAscendente', () => {
  it('es funcion', () => {
    expect(typeof ordenarAlfabeticamenteAscendente).toBe('function');
  });

  it('ordenarAlfabeticamenteAscendente(data) retorna un objeto', () => {
    const midata=JSON.parse(JSON.stringify(data))
    expect(typeof ordenarAlfabeticamenteAscendente(midata)).toBe('object');
  });

  it('ordenarAlfabeticamenteAscendente(data) retorna los pokemones ordenados alfabeticamente', () => {
    const midata=JSON.parse(JSON.stringify(data2))
    expect(ordenarAlfabeticamenteAscendente(midata)).toStrictEqual(
      {
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
            "num": "005",
            "name": "venusaur",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.8",
            "type": [
              "oscuro",
              "normal"
            ],
          }
        
        ]
      });
  });
});


describe('ordenarAlfabeticamenteDescendente', () => {
  it('es funcion', () => {
    expect(typeof ordenarAlfabeticamenteDescendente).toBe('function');
  });

  it('ordenarAlfabeticamenteDescendente(data) retorna un objeto', () => {
    const midata=JSON.parse(JSON.stringify(data))
    expect(typeof ordenarAlfabeticamenteDescendente(midata)).toBe('object');
  });

  it('ordenarAlfabeticamenteDescendente(data) retorna los pokemones ordenados alfabeticamente ZA', () => {
    const midata=JSON.parse(JSON.stringify(data2))
    expect(ordenarAlfabeticamenteDescendente(midata)).toStrictEqual(
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
            "num": "001",
            "name": "bulbasaur",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.3",
            "type": [
              "agua",
              "oscuro"
            ],
          }
        
        ]
      });
  });


});

describe('calculoPorcentaje', () => {
  it('es funcion', () => {
    expect(typeof calculoPorcentaje).toBe('function');
  });

  it('calculoPorcentaje(cantidadTipo,totalPokemon) retorna un objeto', () => {
    const midata=JSON.parse(JSON.stringify(data))
    expect(typeof ordenarAlfabeticamenteDescendente(midata)).toBe('object');
  });

  it('ordenarAlfabeticamenteDescendente(data) retorna los pokemones ordenados alfabeticamente ZA', () => {
    const midata=JSON.parse(JSON.stringify(data2))
    expect(ordenarAlfabeticamenteDescendente(midata)).toStrictEqual(
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
            "num": "001",
            "name": "bulbasaur",
            "pokemon-rarity": "normal",
            "spawn-chance": "0.3",
            "type": [
              "agua",
              "oscuro"
            ],
          }
        
        ]
      });
  });


});