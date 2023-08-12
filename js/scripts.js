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
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    // adding an event listener for button
    button.addEventListener('click', function (event){
      showDetails(pokemon);
    });
  }
  
  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})()
// a forEach.
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  })