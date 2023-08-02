let pokemonList = [
    {name: 'Jigglypuff', height: 1, type: ['fairy', 'normal']},
    {name: 'Charmander', height: 2, type: ['fire', 'monster']},
    {name: 'Snorlax', height: 8, type: ['normal', 'monster']},
    {name: 'Wartortle', height: 4, type: ['water', 'ice']}
];
// a loop with a conditional to display all of the pokemon names and height commenting on the tallest one.
  pokemonList.forEach(function(pokemon){
    if (pokemon.height >=6){  
      document.write(pokemon.name + ' (height = ', pokemon.height + ') - Wow, that\'s big!' + '<br>')
    }
    else if (pokemon.height <6){
      document.write(pokemon.name + ' (height = ', pokemon.height + ')' + '<br>')
    }
  })