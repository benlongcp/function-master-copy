//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    
    return Object.values(object);

    // //create an empty array to return later
    // let valArr = [];
    // //loop through object with for-in
    // for (let key in object){
    //     valArr.push(object.[key]);
    // }
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //uses the Object.keys() method and then joins the array of strings with a space
    return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create empty array to return later
    let stringVals = [];
    //use a for in loop to iterate through the object
    for (let key in object){
        //check if value is a string
        if (typeof object[key] === 'string'){
            stringVals.push(object[key]);
        }
        

    }
    return stringVals.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //check if it's an array
    if (Array.isArray(collection)){
        return "array"
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
    // return string.splice(0, 1, string[0].toUpperCase())

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //create an array to split the individual words to
    let words = string.split(" ");
    //create empty array for capped words
    let capWords = []
    //loop thourgh the words array
    for (let i = 0; i < words.length; i++){
        //push 0th index capatalized letters plus the sliced portion beyond the 0th index to the capWords array
        capWords.push(words[i][0].toUpperCase() + words[i].slice(1)); 
    }

    return capWords.join(" ");  
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //returns the object's name string's 0th index to uppercase plus the sliced portion of the rest of the string (plus some extra hardcoded strings)
    return "Welcome " + object['name'][0].toUpperCase() + object['name'].slice(1) + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // returns the object's name string's 0th index to uppercase plus the sliced portion of the rest of the string plus the same for the species key
    return object['name'][0].toUpperCase() + object['name'].slice(1) + " is a " + object['species'][0].toUpperCase() + object['species'].slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //checks if there is a noises key in the object and if that key has at least one value
    if (object.noises && object.noises.length){
        //returns the joined string
        return object.noises.join(" ");
    } else {
        //else return there are no noises
        return "there are no noises";
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Word ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creates a funciton that takes a string and a word
function hasWord(string, word) {
    //uses the includes string method to check if word is in string
    if (string.includes(word)){
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creates function addFriend that takes two parameters, a strinhg and an object
function addFriend (name, object) {
    //pushes the name string to the array inside object keyed friends
    object['friends'].push(name);
    return object;

}


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //check if the array inside the object at the friends key is indeed an array
    if (Array.isArray(object['friends'])){
        //check if that array includes the input name
        if (object['friends'].includes(name)){
            return true;
        }

    } 
    return false;



}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //create an empty array to return later
    let peeps = [];
    //loop through input array
    for (let i = 0; i < array.length; i++){        
        //check if name in not in the array's object name key 
        if (array[i].name !== name){
            //check if name is not in the friends key
            if (!array[i].friends.includes(name)){
            //push the array object value name to the peeps array
            peeps.push(array[i].name);

        }
        
        }
    

    }
    return peeps;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function takes an object parameter as well as a key string and value
function updateObject(object, key, value) {
    //update the object
    object[key] = value;
    return object;




}



//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //loop through the array
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
        //deletes the key that matches the index of the array (implicitly does noting if no key exists);
        delete object[array[i]];

        //for each iteration of the array loop, loop through the object keys
        // for (key in object){
        //     console.log(key);
        //     //if the array index value is equal to the object key, delete the key
        //     if (array[i] === key){
        //         delete object[key];
        //     }
        // }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//function that takes an array parameter
function dedup(array) {
    //create empty array to return later:
    let retArr = [];
    //loop through our array
    for (let i = 0; i < array.length; i++){
        //check if retArr does not contain the indexed array item
        if (!retArr.includes(array[i])){
            retArr.push(array[i]);
        }

    }

    return retArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}