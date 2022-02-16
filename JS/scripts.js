//Brianna Winston
                        /* This program demonstrates a simple JS app */

//pokemonList array has been encapsulated in a  "IIFE" repository function to eliminate global variable interference from other javascript files

let repository = (function() {
    let modalContainer =document.querySelector("#modal-container");
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
    showDetails(pokemon)
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

function showDetails(pokemon) {
    repository.loadDetails(pokemon).then(function () {
        showModal(pokemon);
    });
}

        
function showModal(pokemon){
      modalContainer.innerHTML = "";

      let modal = document.createElement("div");
      modal.classList.add("modal");

      let closeButtonElement = document.createElement("button");
      closeButtonElement.classList.add("modal-close");
      closeButtonElement.innerText = "Close";
      closeButtonElement.addEventListener("click",hideModal);

      let titleElement = document.createElement("h1");
      titleElement.innerText = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

      let heightElement = document.createElement("p");
      heightElement.innerText = "Height: " + pokemon.height;

      let typeElement = document.createElement("p");
      let pokemonType = pokemon.types;
      typeElement.innerText = "Type: " + pokemonType.join(', ');

      let contentElement = document.createElement("p");

        let imgContainer = document.querySelector('#image-container');
        let imgElement = document.createElement('img');
        imgElement.src = pokemon.imgUrl


      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
    
      modal.appendChild(contentElement);
      modal.appendChild(imgElement);
      modalContainer.appendChild(modal);
      imgContainer.appendChild(modal);

      modalContainer.classList.add("is-visible");
}  


function hideModal(){
    modalContainer.classList.remove("is-visible");
}

document.querySelector("#show-modal").addEventListener("click", () => {
    showModal("Modal title" , "This is the modal content!");
});

window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")){
        hideModal();
    }
});

modalContainer.addEventListener("click", (e) => {
    let target = e.target;
    if (target === modalContainer){
        hideModal();
    }
});

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
};

})();

repository.loadList().then(function() {
    repository.getAll().forEach(function(pokemon) {
        repository.addListItem(pokemon);
    });
}); 
    




 


 
