import {printToDom} from '../helpers/util.js'
import {characterBuilder, getCharacterz} from './characters.js';

const closeButtonEvent = () => {
    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', () => {
        characterBuilder(getCharacterz());//pass in it the result of characterZ
    });
};//resolve the inside parenthesis first, get characterz returns an array. so when it calls character builder it returns an array. 

const detailsBuilder = (character) => {
    let domString = '';
    domString += `<div class="col-6 offset-md-3">`;
    domString +=   `<div class="row">`;
    domString +=     `<button class="btn btn-danger" id="close">x</button>`;
    domString +=   `</div>`;
    domString +=     `<div class="col">`;
    domString +=        `<img src="${character.imageUrl}" alt="${character.name}"/>`;
    domString +=     `</div>`;
    domString +=     `<div class="col">`;
    domString +=         `<h1>${character.name}</h1>`;
    domString +=         `<h3>${character.house}</h3>`;
    domString +=     `</div>`;
    domString += `  </div>`;
    domString += `</div>`;
printToDom(domString);
closeButtonEvent();
};

export {detailsBuilder};

//needs an input because you're passing something in, so character
//don't need a for loop bc you don't have an array! you're only printing out one card.