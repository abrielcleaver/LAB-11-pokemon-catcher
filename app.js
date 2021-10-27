// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import pokemon from './data/pokemon.js';
import { capturePokemon, encounterPokemon } from './utils.js';
// console.log(pokemon)

const pokemon1Img = document.getElementById('pokemon-1-img');
const pokemon2Img = document.getElementById('pokemon-2-img');
const pokemon3Img = document.getElementById('pokemon-3-img');

const pokemon1Radio = document.getElementById('pokemon-1-radio');
const pokemon2Radio = document.getElementById('pokemon-2-radio');
const pokemon3Radio = document.getElementById('pokemon-3-radio');

const button = document.getElementById('capture-button');
const totalPlaysSpan = document.getElementById('total-plays');


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
    encounterPokemon(pokemon1.id);
    pokemon1Img.src = pokemon1.url_image;
    pokemon1Radio.value = pokemon1.id;

    let pokemon2 = pokemon[randomNum2];
    encounterPokemon(pokemon2.id);
    pokemon2Img.src = pokemon2.url_image;
    pokemon2Radio.value = pokemon2.id;

    let pokemon3 = pokemon[randomNum3];
    encounterPokemon(pokemon3.id);
    pokemon3Img.src = pokemon3.url_image;
    pokemon3Radio.value = pokemon3.id;
  };
    
let totalPlays = 0;
generatePokemon();

button.addEventListener('click', () =>{
  // increment totalPlays
  // call capturePokemon with chosen pokemon
  // if totalPlays >= 10
  // redirect to results
  // else
  // call generatePokemon function
  const pokemonRadio = document.querySelector('input[type=radio]:checked');
    if (pokemonRadio){
      const pokemonId = Number(pokemonRadio.value);
      totalPlays++;
      capturePokemon(pokemonId);
    }
    if (totalPlays >= 10){
      window.location.replace('./results/index.html');
    } else {
      generatePokemon();
    }
    totalPlaysSpan.textContent = totalPlays + ' of 10 captured.';
    // console.log('clicking')
  });
    

