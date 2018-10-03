function executeThisCodeAfterFileLoaded () {
    console.log('request', this)//no arrows; they change what 'this' means. 
}

function executeThisCodeIfXhrFails () {
    console.log('shit broke bruh');
}

const getCharacters = () => {
    let myRequest  = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);//getting attached to the load event
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);//getting attached to the error event
    myRequest.open('GET', './db/characters.json');//get request to the characters file
    myRequest.send(); //this runs the request written above
    //no need to memorize this, just copy it. characters and var name will change that's all
};

export {getCharacters};