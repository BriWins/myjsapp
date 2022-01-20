//Brianna Winston
//Last updated~ January 20, 2022

                        /* This program demonstrates a simple JS app */

//pokemonList array has been encapsulated in a  "IIFE" repository function to eliminate global variable interference from other javascript files

let repository = (function() {

  let pokemonList = [{
          name: "Pikachu",
          height: 0.4,
          type: ["static", "lightningrod"]
      },
      {
          name: "Cubchoo",
          height: 0.5,
          type: ["charm", "growl"]
      },
      {
          name: "Pidgeot",
          height: 1.5,
          type: ["tackle", "twister"]
      },
      {
          name: "Wigglytuff",
          height: 1,
          type: ["sing", "attract"]
      },
      {
          name: "Pichu",
          height: 0.3,
          type: ["sweet kiss", "charm"]
      },
      {
          name: "Igglybuff",
          height: 0.3,
          type: ["cute-charm", "friend-guard"]
      },
      {
          name: "Diglet",
          height: 0.2,
          type: ["growl", "sucker punch"]
      }
  ]

  //add() function takes input for a new pokemon

  function add(newPokemon) {
      let error = "Invalid! Input must be an object!";
      if (typeof newPokemon === "object") {
          pokemonList.push(newPokemon)
      } else {
          return error;
      }
  }

//showDetails() iterates through each object in pokemonList array

  function showDetails( pokemon ){
    console.log( pokemon );
  }

//addListItem() creates <li> tag and a button with .button--class

  function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon--list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);

      button.addEventListener( 'click', function(){ 
      showDetails( pokemon.name )
      })
    }
      
//getAll() gathers all from repository
 
  function getAll() {
      return pokemonList;
  }

//returns added pokemon input, addListItem(0) function input, and updated repository
 
  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
  };

})();

//grabs informations from within IFFY functions and displays each object in browswer

repository.getAll().forEach(function(pokemon) {

repository.addListItem(pokemon);

}); 






 


 
