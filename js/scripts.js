let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Jigglypuff', height: 1, type: ['fairy', 'normal']},
    {name: 'Charmander', height: 2, type: ['fire', 'monster']},
    {name: 'Snorlax', height: 8, type: ['normal', 'monster']},
    {name: 'Wartortle', height: 4, type: ['water', 'ice']}
];

  function getAll() {
    return pokemonList;
  }
  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  };
})()
// a forEach with a conditional to display all of the pokemon names and height commenting on the tallest one.
  pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height >=6){  
      document.write(pokemon.name + ' (height = ', pokemon.height + ') - Wow, that\'s big!' + '<br>')
    }
    else if (pokemon.height <6){
      document.write(pokemon.name + ' (height = ', pokemon.height + ')' + '<br>')
    }
  })