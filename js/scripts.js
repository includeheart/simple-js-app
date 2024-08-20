let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    {name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
    {name: 'Venusaur', height: 2, types: ['grass', 'poison']},
   ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
    
  function getAll() {
      return pokemonList;
    }

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.classList.add('button-class');
    button.innerText = pokemon.name;
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function(){
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
  };
})();

pokemonRepository.add({ name: 'Charmander', height: 0.6, types: ['fire'] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});