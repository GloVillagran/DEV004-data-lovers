import { tarjetaDataString, ordenarArregloNumero, filtrarTipos, buscarPorNombre, cortarTop, ordenarAlfabeticamenteAscendente, ordenarAlfabeticamenteDescendente,calculoPorcentaje, calcularPromedioPorTipo } from '../src/data.js';
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

//data falsa para testear la funcion de ordenar alfabeticamente

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
//data falsa para testear la funcion de calculo de promedio segun tipo y stats
const data3 = {
  "pokemon": [
    {
      "name": "bulbasaur",
      "type": [
        "agua",
        "oscuro"
      ],
      "stats": {
        "base-attack": "155",
        "base-defense": "153",
        "base-stamina": "111",
        "max-cp": "1544",
        "max-hp": "99"
      },
    },
    {
      "name": "venusaur",
      "type": [
        "oscuro",
        "normal"
      ],
      "stats": {
        "base-attack": "207",
        "base-defense": "201",
        "base-stamina": "172",
        "max-cp": "2786",
        "max-hp": "147"
      },
    },
    {
      "name": "squirtle",
      "type": [
        "dragon",
        "oscuro"
      ],
      "stats": {
        "base-attack": "220",
        "base-defense": "186",
        "base-stamina": "155",
        "max-cp": "2713",
        "max-hp": "134"
      },
    },
    {
      "name": "charizard",
      "type": [
        "agua",
        "volador"
      ],
      "stats": {
        "base-attack": "221",
        "base-defense": "159",
        "base-stamina": "190",
        "max-cp": "2783",
        "max-hp": "162"
      },
    },
    {
      "name": "charmander",
      "type": [
        "agua",
        "volador"
      ],
      "stats": {
        "base-attack": "190",
        "base-defense": "169",
        "base-stamina": "330",
        "max-cp": "3225",
        "max-hp": "272"
      },
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

  it('calculoPorcentaje(2,6) esta funcion retorna "33.33"', () => {
    
    expect(calculoPorcentaje(2,6)).toBe("33.33");
  });

});

describe('calcularPromedioPorTipo', () => {
  it('es funcion', () => {
    expect(typeof calcularPromedioPorTipo).toBe('function');
  });

  it('calcularPromedioPorTipo(data3.pokemon, "agua", "base-attack") esta funcion retorna "188.67"', () => {
    
    expect(calcularPromedioPorTipo(data3.pokemon, "agua", "base-attack")).toBe("188.67");
  });

});
