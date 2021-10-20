# Alchemy Bootstrap Template

# Pokemon Catcher
* home page (root directory)
    * index.html
    * app.js
* results page (/results directory)
    * index.html
    * results.js
* storage-utils.js -- hold localStorage functions
* pokemon.js -- holds data

## Making a Plan

## HTML Elements
* make a home page with
  * two images as radio buttons
  * button with an id of select-fruit
* make an empty results page

## Local Storage Functions

* getResults -- return the results array or empty array
* encounterPokemon -- increment the encounter key 
* capturePokemon -- increment the capture key

## app.js logic
* make function called generatePokemon()
    * generate 3 random pokemon
    * call showPokemon for each
    * render the pokemon on the page

### ON PAGE LOAD
* set totalPlays to 0
* call generatePokemon

### ON BUTTON CLICK
* increment totalPlays
* call capturePokemon with chosen pokemon
* if totalPlays >= 10
   * redirect to results
* else
  * call generatePokemon







## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass