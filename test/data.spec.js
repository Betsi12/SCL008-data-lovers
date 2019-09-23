global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('filterData', () => {
  const data = [
    {
      name: 'Squirtle',
      type: 'Water'
    },
    {
      name: 'Wartortle',
      type: 'Water'
    },
    {
      name: 'Blastoise',
      type: 'Water'
    },
    {
      name: 'Psyduck',
      type: 'Water'
    },
    {
      name: 'Abra',
      type: 'Psychic'
    },
    {
      name: 'Mr. Mime',
      type: 'Psychic'
    },
    {
      name: 'Jynx',
      type: 'Psychic'
    },
    {
    name: 'Mewtwo',
    type: 'Psychic'
  },
  {
    name: 'Mew',
    type: 'Psychic'
  },
    {
      name: 'Charmander',
      type: 'Fire'
    },
    {
      name: 'Charizard',
      type: 'Fire'
    },
    {
    name: 'Vulpix',
    type: 'Fire'
  },
  {
    name: 'Ninetales',
    type: 'Fire'
  },
  {
    name: 'Zubat',
    type: 'Grass'
  }
  ]
  
  it('Debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });

  it('Debería retornar Squirtle como primer pokémon de tipo Agua', () => {
    assert.equal(window.filterData(data,'Water')[0].name, 'Squirtle');//assert comprueba lo que estoy testeando y equal es el metodo que nos estrega chai
  });

  it('Debería retornar Mew como ultimo pokémon de tipo Psychic', () => {
    assert.equal(window.filterData(data,'Psychic')[4].name, 'Mew');
  });

  it('Debería retornar Charizard como segundo pokémon de tipo Fire', () => {
    assert.equal(window.filterData(data,'Fire')[1].name, 'Charizard');
  });

  describe('sortData', () => {
    
    it('Debería ser una función', () => {
      assert.equal(typeof sortData, 'function');
    });
  })

  it('Debería retornar Abra como primer pokémon de la A-Z', () => {
    assert.equal(window.sortData(data,'name','a--z')[0].name, 'Abra');
  })

  it('Debería retornar Zubat como primer pokémon de la Z-A', () => {
    assert.equal(window.sortData(data,'name','z--a')[0].name, 'Zubat');
  })

  it('Debería retornar Vulpix como tercer pokémon de la Z-A', () => {
    assert.equal(window.sortData(data,'name','z--a')[2].name, 'Vulpix');
  })

  it('Debería retornar Abra como ultimo pokémon de la Z-A', () => {
    assert.equal(window.sortData(data,'name','z--a')[13].name, 'Abra');
  })

});

describe('computeStats', () => {
  const dataStats = [
    {
      name: 'Squirtle',
      type: 'Water'
    },
    {
      name: 'Wartortle',
      type: 'Water'
    },
    {
      name: 'Blastoise',
      type: 'Water'
    },

    {
      name: 'Abra',
      type: 'Psychic'
    },

    {
      name: 'Charizard',
      type: 'Fire'
    },
    {
      name: 'Vulpix',
      type: 'Fire'
    },
    {
      name: 'Zubat',
      type: 'Grass'
    }
  ]
  it('Debería mostrar 3 Pokemons tipo agua, 2 de fuego, 1 psyquico y 1 de planta', () => {
    assert.deepEqual(window.data.computeStats(dataStats),
      [{ "Fire": 2 }, { "Psychic": 1 }, { "Grass": 1 }, { "Water": 3 }]);

  });
})