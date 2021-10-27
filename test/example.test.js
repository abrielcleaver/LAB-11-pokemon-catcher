// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { encounterPokemon, capturePokemon, findById, getPokedex, setPokedex } from '../utils.js';
import pokemon from '../data/pokemon.js';

const test = QUnit.test;

test('findById should return item matching ID', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, pokemon);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test ('getPokedex returns the key "RESULTS" from localStorage', (expect) => {
     //Arrange
    // Set up your arguments and expectations
    const results = [
        { id: 1, encountered: 2, captured: 2 },
        { id: 2, encountered: 2, captured: 1 },
        { id: 3, encountered: 2, captured: 1 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, results);
});

test ('encounterPokemon increments encountered key by 1 in pokedex', (expect)=> {
    //Arrange
    // Set up your arguments and expectations
    // Make sure something is in localStorage
    const pokedex = [
        { id: 2, encountered: 0, captured: 0 },
    ];
    localStorage.setItem('RESULTS', JSON.stringify(pokedex));
    const expected = [
        { id: 2, encountered: 1, captured: 0 },
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    encounterPokemon(2);
    const actual = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);

});

test ('capturePokemon increments captured key by 1 in pokedex', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // Make sure something is in localStorage
    const pokedex = [
        { id: 4, encountered: 1, captured: 0 },
        { id: 8, encountered: 1, captured: 0 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(pokedex));
    const expected = [
        { id: 4, encountered: 1, captured: 1 },
        { id: 8, encountered: 1, captured: 0 }
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    capturePokemon(4);
    const actual = getPokedex();

     //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test ('setPokedex works', (expect) =>{
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        { id: 1, encountered: 2, captured: 1 }
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    setPokedex(expected);
    const actual = getPokedex();
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});