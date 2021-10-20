

import pokemon from "./pokemon.js";

export function findById(id, pokemon){
        for (let poke of pokemon) {
        if (poke.id === id) {
            return poke;
        }
    }
}