//Array holding Pokemon elements

let pokemonList = [
    { name:"Pikachu", height:0.4, type: ["static","lightningrod"]},
    { name:"Cubchoo", height:0.5, type: ["charm","growl"]},
    { name:"Pidgeot", height:1.5, type: ["tackle","twister"]},
    { name:"Wigglytuff", height:1, type: ["sing","attract"]},
    { name:"Pichu", height:0.3, type: ["sweet kiss","charm"]},
    { name:"Igglybuff", height:0.3, type: ["cute-charm","friend-guard"]},
    { name:"Diglet", height:0.2, type: ["growl","sucker punch"]}
]
    
//for loop displays each pokemonList element's name, height, and type 
for (let i = 0; i < pokemonList.length; i++) {
    const { name, height, type } = pokemonList[i];
    const pokemonInfo =
       "Name: " + name + " , " + "Height: " + height + " meters " + " , " + "Types: " + type.join(" , ");
    const smallPokemonMessage = "AWW! that is one itty bitty Pokemon";   
    const bigPokemonMessage = "WHOA! that is one big 'ole Pokemon";
      if (pokemonList[i].height < 0.3) {                                 //if statement targets smallest and largest Pokemon
      document.write(pokemonInfo + "- " + smallPokemonMessage + "<br />"); //displays message for smallest Pokemon
    } else if (pokemonList[i].height > 1) {
      document.write(pokemonInfo + "- " + bigPokemonMessage + "<br />"); //displays message for largest Pokemon
    } else {
      document.write(pokemonInfo + "<br />"); //no message displayed outside largest and smallest Pokemon
    }
  }

