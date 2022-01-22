//Brianna Winston
//Last updated~ January 22, 2022

                        /* This program demonstrates a simple JS app */

//pokemonList array has been encapsulated in a  "IIFE" repository function to eliminate global variable interference from other javascript files

let repository = (function() {
let  pokemonList = [];
let apiUrl = " https://pokeapi.co/api/v2/pokemon/?limit=150 ";

function add(newPokemon) {
    let error = "Invalid! Input must be an object!";
    if (typeof newPokemon === "object") {
        pokemonList.push(newPokemon)
    } else {
        return error;
    }
}

function getAll() {
    return pokemonList;
}

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
      
function loadList() {
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
    }).catch(function(e){
        console.error(e);
    })
}

function loadDetails(item){
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details){
        item.imgUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
    }).catch(function(e){
        console.error(e);
    });
}
    
function showDetails(item) {
    repository.loadDetails(item).then(function () {
        console.log(item);
    });
}
        
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
};

})();

repository.loadList().then(function() {
    repository.getAll().forEach(function(pokemon) {
        repository.addListItem(pokemon);
    });
}); 



       


      






 


 
