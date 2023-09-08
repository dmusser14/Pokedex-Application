let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
  let modalContainer = document.querySelector('#modal-container');

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
    // added Bootstrap utility class for li elements
    listItem.classList.add('list-group-item');
    button.innerText = pokemon.name;
    // added Bootstrap button utility classes
    button.classList.add('btn', 'btn-primary', 'btn-lg');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#modal-container');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    // adding an event listener for button
    button.addEventListener('click', function (event){
      showDetails(pokemon);
    });
  }
  
  // Adding Loading Message for user
  function showLoadingMessage(){
    console.log('Loading');
  }

  // Hiding Loading Message
  function hideLoadingMessage() {};

  // show the Modal with Pokemon
  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');

    // clear existing content of the modal
    modalTitle.empty();
    modalBody.empty();

    // creating element for name in modal content
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    // creating img in modal content
    let imageElement = $('<img class="modal-img">');
      imageElement.attr('src', pokemon.imageUrl);
    // creating element for height in modal content
    let heightElement = $('<p>' + 'height : ' + pokemon.height + '</p>');
    
    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(pokemon) { 

    })
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
      hideLoadingMessage(); 
    }).catch(function (e) {
      hideLoadingMessage();
      console.error(e);
    })
  }

  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      hideLoadingMessage();
    }).catch(function (e) {
      hideLoadingMessage();
      console.error(e);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
