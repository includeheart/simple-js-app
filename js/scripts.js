let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
        {name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
        {name: 'Venusaur', height: 2, types: ['grass', 'poison']},
    ];
    function add(pokemon) {
        pokemonList.push(pokemon);
      }
    
    function getAll() {
        return pokemonList;
      }
    
    return {
        add: add,
        getAll: getAll
      };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + ' is ' + pokemon.height + 'm tall and ' + pokemon.types + ' type ' + '<br>'); //Haven't figured out how to separate the two types
});