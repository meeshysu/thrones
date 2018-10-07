import {printToDom} from '../helpers/util.js';
import {detailsBuilder} from './details.js';
 
 let characters = [];

 const setCharacters = (newArray) => {
    characters = newArray;
};

const getCharacterz = () => {
    return characters;
};

 const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find(x => x.id === characterId);
        detailsBuilder(currentCharacter);
};

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card')
    for(let i = 0; i < characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
};

const sortPeople = (e) => {
    const house = e.target.id;
    if(house === 'All') {
        characterBuilder(characters);
    } else {
        const filteredPeeps = characters.filter(x => x.house === house);
        characterBuilder(filteredPeeps);
    }
};

const sortEvents = () => {
    const allButton = document.getElementById('All');
    const starkButton = document.getElementById('Stark');
    allButton.addEventListener('click', sortPeople); //function sort people
    starkButton.addEventListener('click', sortPeople);
};

 const characterBuilder = (charactersArray) => {
    let domString = '';
    charactersArray.forEach((character) => {
    domString += `<div class="col-2 character-card" id="${character.id}">`;
    domString +=    `<div class="card">`;
    domString +=       `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
    domString +=       `<div class="card-body">`;
    domString +=       `<h5 class="card-title">${character.name}</h5>`;
    domString +=       `</div>`;
    domString +=      `</div>`;
    domString += `  </div>`;
 })
 printToDom(domString);
 createEvents();
};
 


export {characterBuilder, setCharacters, getCharacterz, sortEvents};
//for each is singular on the inside, characters to character
  //works for id or class . or # - gets the closest parentNode if they are on two different levels.
  //.find is an array method
    //() the name you want to call when you are looping thru it, like an x, and you want to return the one that matches - a condition: when x.id is exactly equal to character.id