// import {characterBuilder} from './javascripts/components/characters.js'
import {getCharacters} from './data/charactersData.js'

const initializeApp = () => {
    getCharacters();
};
initializeApp();