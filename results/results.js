import { findById, getPokedex } from '../utils.js';
import pokemon from '../data/pokemon.js';

const pokedex = getPokedex();

const main = document.getElementById('main');

for (let item of pokedex){
    const poke = findById(item.id, pokemon);
    const container = document.createElement('div');
    container.classList.add('results-container');
    const img = document.createElement('img');
    img.src = poke.url_image;
    const header = document.createElement('h2');
    header.textContent = pokemon.name;
    const div = document.createElement('div');
    div.classList.add('results-body');
    const p = document.createElement('p');
    p.classList.add('results-text');
    const encounteredSpan = document.createElement('span');
    encounteredSpan.textContent = `Encountered: ${item.encountered}`;
    const capturedSpan = document.createElement('span');
    capturedSpan.textContent = `Captured: ${item.captured}`;

    p.append(encounteredSpan, capturedSpan);
    div.append( img, p);
    container.append(header, div);
    main.append(container);
}
