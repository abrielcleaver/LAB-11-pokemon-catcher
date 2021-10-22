// import pokemon from './data/pokemon.js';

export function findById(id, pokemon){
        for (let poke of pokemon) {
        if (poke.id === id) {
            return poke;
        }
    }
}

export function getPokedex(){
    const pokedexString = localStorage.getItem('RESULTS') || '[]';
    const pokedex = JSON.parse(pokedexString);
    return pokedex;
}

export function encounterPokemon(id){
    // GET - results(pokedex) from localStorage
    let results = getPokedex();
    let items = results.find(pokemon => pokemon.id === id);
    // MODIFY -- results
    // if the id exists in the results in localStorage
    if (items){
        // increment the shown attribute
        items.encountered++;
    // else 
     } else {
        //  create a new object and push it onto the results array
        //  { id: '1', shown: 1, picked: 0 }
        const newItem = { id: id, encountered: 1, captured: 0 };
        results.push(newItem);
    }
    // SET -- results back to localStorage
    localStorage.setItem('RESULTS', JSON.stringify(results));
} 

export function capturePokemon(id){
    let results = getPokedex();
    let capturedPoke = results.find(pokemon => pokemon.id === id);

    capturedPoke.captured++;
    localStorage.setItem('RESULTS', JSON.stringify(results));
}
export function setPokedex(results){
    localStorage.setItem('RESULTS', JSON.stringify(results));
}