# Pokemon Catcher
* root directory
    * index.html (home page HTML)
    * app.js (home page javascript -- linked in above)
* results page (/results directory)
    * index.html (results page HTML)
    * results.js (results page javascript)
* storage-utils.js -- holds localStorage functions
* pokemon.js -- holds data

## Making a Plan

## HTML Elements
- [x] make a home page & include:
  - [x] three images as radio buttons
  - [x] button with an id of capture-button
- [x] make an empty results page

## Local Storage Functions

- [x] getResults -- return the results array from LS or empty array
- [ ] encounterPokemon -- increment the encounter key 
- [ ] capturePokemon -- increment the capture key

## app.js logic
- [x] make function called generatePokemon()
    - [x] generate 3 random pokemon
    - [ ] call showPokemon for each
    - [x] render the pokemon on the page

### ON PAGE LOAD
- [ ] set totalPlays to 0
- [ ] call generatePokemon

### ON BUTTON CLICK
- [ ] increment totalPlays
- [ ] call capturePokemon with chosen pokemon
- [ ] if totalPlays >= 10
   - [ ] redirect to results
* else
  - [ ] call generatePokemon

## Results Page
### HTML Elements
for each item in results
- [ ] Image
- [ ] header with the name of the pokemon
- [ ] show how many times shown, how many times picked

### results.js
- [ ] get the data from local storage
- [ ] loop through each item in results
- [ ] get its data from pokemon.js (using findById)
- [ ] render the results (img, header, data)





## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass