// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import pokemon from "./data/pokemon.js";
import { capturePokemon } from "./utils.js";
// console.log(pokemon)

const pokemon1Img = document.getElementById('pokemon-1-img');
const pokemon2Img = document.getElementById('pokemon-2-img');
const pokemon3Img = document.getElementById('pokemon-3-img');
const pokemone1Radio = document.getElementById('pokemon-1-radio');
const pokemone2Radio = document.getElementById('pokemon-2-radio');
const pokemone3Radio = document.getElementById('pokemon-3-radio');
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

    let totalPlays = 0;

    button.addEventListener('click', () =>{
      // increment totalPlays
      // call capturePokemon with chosen pokemon
      totalPlays++
      const pokemonRadio = document.querySelector('input[type=radio]:checked');
      const pokemonId = pokemonRadio.value;
      capturePokemon(pokemonId);
      // if totalPlays >= 10
      // redirect to results
      // else
      // call generatePokemon function
      if (totalPlays >= 10){
        window.location.replace('./results/index.html');
      } else {
      generatePokemon();
     // console.log('clicking')
    }});
    
