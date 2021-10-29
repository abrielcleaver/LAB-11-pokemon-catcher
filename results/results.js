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
    div.append(img, p);
    container.append(header, div);
    main.append(container);
}

const names = pokedex.map((item)=>{
    const poke = findById(item.id, pokemon);
    return poke.pokemon;
});

const captured = pokedex.map(item=>item.captured);
// console.log(captured);
var resultsChart = document.getElementById('pokedex-chart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(resultsChart, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Captured',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});