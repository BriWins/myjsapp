let repository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(newPokemon) {
    let error = "Invalid! Input must be an object!";
    if (typeof newPokemon === "object") {
      pokemonList.push(newPokemon);
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
    button.classList.add(
      "list-group-item",
      "list-group-item-action",
      "text-center",
      "text-uppercase",
      "button-class"
    );
    listpokemon.setAttribute("data-toggle", "modal");
    listpokemon.setAttribute("data-target", "#pokemonModal");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            height: item.height,
            types: item.types,
            detailsUrl: item.url,
          }
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.types = [];
        details.types.forEach(function (itemType) {
          item.types.push(itemType.type.name);
        });
        item.imgUrl = details.sprites.front_default;
        item.height = details.height;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    repository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

function showModal(pokemon) {
    const modalTitle = $(".modal-title");
    const modalBody = $(".modal-body");
   

    const titleElement = pokemon.name.toUpperCase();
    const heightElement = "Height: " + pokemon.height;
    const typesElement = "Types: " + pokemon.types.join(",");

    let imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.src = pokemon.imgUrl;
   
    modalTitle.empty();
    modalBody.empty();

    modalTitle.append(titleElement);
    modalBody.append(heightElement, typesElement,imageElement);
   
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

repository.loadList().then(function () {
  repository.getAll().forEach(function (pokemon) {
    repository.addListItem(pokemon);
  });
});




 


 
