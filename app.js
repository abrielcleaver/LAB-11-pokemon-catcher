// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import pokemon from "./pokemon.js";
// console.log(pokemon)

const pokemon1Img = document.getElementById('pokemon-1-img');
const pokemon2Img = document.getElementById('pokemon-2-img');
const pokemon3Img = document.getElementById('pokemon-3-img');
const button = document.getElementById('capture-button');


const generatePokemon = () => {
  // generate 3 random pokemon
    // generate 3 random indices of pokemon array

    let randomNum1 = Math.floor(Math.random() * pokemon.length);
    let randomNum2 = Math.floor(Math.random() * pokemon.length);
    let randomNum3 = Math.floor(Math.random() * pokemon.length);

    // regenerate the number if they match

    while (
      randomNum1 === randomNum2 || 
      randomNum1 === randomNum3 ||
      randomNum2 === randomNum3
    ) {
      randomNum1 = Math.floor(Math.random() * pokemon.length);
      randomNum2 = Math.floor(Math.random() * pokemon.length);
      randomNum3 = Math.floor(Math.random() * pokemon.length);

      }
      let pokemon1 = pokemon[randomNum1];
      pokemon1Img.src = pokemon1.url_image;

      let pokemon2 = pokemon[randomNum2];
      pokemon2Img.src = pokemon2.url_image;

      let pokemon3 = pokemon[randomNum3];
      pokemon3Img.src = pokemon3.url_image;
      
    };
    generatePokemon();

    button.addEventListener('click', ()=> {
      generatePokemon();
      console.log('clicking')
    })
    
