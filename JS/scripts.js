//Last updated~ January 3, 2022

                        /* This program demonstrates a simple JS app */

//pokemonList array has been encapsulated in a  "IIFE" pokemonRepository function to eliminate global variable interference from other javascript files

let pokemonRepository = (function() {

let pokemonList = [
    { name:"Pikachu", height:0.4, type: ["static","lightningrod"]},
    { name:"Cubchoo", height:0.5, type: ["charm","growl"]},
    { name:"Pidgeot", height:1.5, type: ["tackle","twister"]},
    { name:"Wigglytuff", height:1, type: ["sing","attract"]},
    { name:"Pichu", height:0.3, type: ["sweet kiss","charm"]},
    { name:"Igglybuff", height:0.3, type: ["cute-charm","friend-guard"]},
    { name:"Diglet", height:0.2, type: ["growl","sucker punch"]}
]

//This function allows new pokemon information to be submitted. However, the information must be an actual object. 

function add(newPokemon){
    if (typeof newPokemon === "object"){  //verifies validity of user input
        pokemonList.push(newPokemon) }
    else {
      document.write("Invalid! Input must be an object!")
    }
}

//getAll function retains all additional and original input

function getAll(){
  return pokemonList;
}

 // **** ADD ADDLISTITEM FUNCTION TO CREATE LIST OF POKEMON **** \\
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon--list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  } 
 
  function showDetails(pokemon){
    console.log(pokemon.name);
  }
  
//Filter function extracts biggest pokemons from pokemonList array
let isPokemonBig = pokemonList;
const bigPokemons = isPokemonBig.filter((height) => {
return isPokemonBig >= 0.5;
})

//returns key-value paris

return {
  add: add,
  getAll: getAll
};

})();

//forEach function prints each pokemonList string while returning a message for biggest and smallest pokemon

function arrayDetails(list) {
      list.forEach(function(item) {
        document.write( "<br />" + "Name: " + item.name + " " + "Height: " + item.height + " " + "meters" + " " + "Type: " + item.type.join(", ")); {
           if (item.height < 0.3 ) {
            document.write( " ~ AWW! that is one itty bitty Pokemon!");
          }
          else if (item.height > 1) {
              document.write(" ~ WHOA! that is one big 'ole Pokemon!"); 
      }
    }
  });
}

//pokemonRepository getAll function allows arrayDetails function to access information with IIFE function
arrayDetails(pokemonRepository.getAll());





 


 
