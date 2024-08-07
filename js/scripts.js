let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    {name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
    {name: 'Venusaur', height: 2, types: ['grass', 'poison']},
];

/* for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.5) {
        document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - That’s a big boy<br>'); //This will check if the height is greater than 1.5, and if it is, it will print "That’s a big boy!" after the height.
    } else {
        document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')<br>'); //This will print the name and height of the Pokémon if the height is not greater than 1.5. At this point, it should only show Venosaur with the comment.
    }
}*/

pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + ' is ' + pokemon.height + 'm tall, and ' + pokemon.types + ' type ' + '<br>'); //I couldn't figure out how to separate the 'Grass' and 'Poison' types, either with a '/' or something else.
})