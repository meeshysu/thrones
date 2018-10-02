import {printToDom} from '../helpers/util.js';
import {detailsBuilder} from './details.js';
 
 const characters = [
     {id: 'character1',
     name: "Brienne of Tarth",
     house: "Tarth",
     imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/6/64/Brienne.PNG/revision/latest/scale-to-width-down/348?cb=20170822095536"},
     {id: 'character2',
     name: "Jeor Mormont",
     house: "Mormont",
     imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Jeor_Mormont_Season_2.jpg/revision/latest/scale-to-width-down/333?cb=20120705014740"},
     {id: 'character3',
     name: "Jaime Lannister",
     house: "Lannister",
     imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/Jaime.jpg/revision/latest/scale-to-width-down/296?cb=20170818052054"},
     {id: 'character4',
     name: "Myrcella Baratheon",
     house: "Baratheon",
     imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/0/02/MyrcellaS5Cropped.jpg/revision/latest/scale-to-width-down/339?cb=20160802025401"},
 ];



 const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find(x => x.id === characterId)
        detailsBuilder(currentCharacter);
};

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card')
    for(let i = 0; i < characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
};


 const characterBuilder = () => {
     let domString = '';
 characters.forEach((character) => {
    domString += `<div class="col-2 character-card" id="${character.id}">`;
    domString +=    `<div class="card">`;
    domString +=    `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
    domString +=    `<div class="card-body">`;
    domString +=    `<h5 class="card-title">${character.name}</h5>`;
    domString +=    `</div>`;
    domString +=    `</div>`;
    domString += `  </div>`;
 })
 printToDom(domString);
 createEvents();
};

    export {characterBuilder};
//for each is singular on the inside, characters to character
  //works for id or class . or # - gets the closest parentNode if they are on two different levels.
  //.find is an array method
    //() the name you want to call when you are looping thru it, like an x, and you want to return the one that matches - a condition: when x.id is exactly equal to character.id