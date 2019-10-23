// Your mission should you choose to accept it is to complete the following functions. 
// If you choose to do so, you may find that you are ready to crush it on the precourse exit.

// Remember your training:
    // Be sure you understand the instructions.
    // Pseudocode your logic.
    // Breathe.
    // You can do this.


/////////////////////////////////////////////////////////
// MANIPULATING COLLECTIONS
/////////////////////////////////////////////////////////


const pureShuffle = array => {
    // i: array
    // o: new array with contents shuffled around
    // c: must not modify input array
    // e:

    // declare new array
    let shuffled = [];
    // loop through array while new array length is less than input
    for (let i = 0; shuffled.length < array.length; i++) {
        // get random element
        let randomEl = array[Math.floor(Math.random() * array.length)];
        // if new array does not contain random element add it to new array
        if (!shuffled.includes(randomEl)) {
            shuffled.push(randomEl);
        }
    }
    return shuffled;
};

const dirtyShuffle = (array) => {
    // i: array
    // o: new array with contents shuffled around
    // c: should modify original array
    // e:
    
    // declare hold variable
    let hold;
    // loop through array
    for (let i = 0; i < array.length; i++) {
        // declare variable to store random index
        let randomIndex = Math.floor(Math.random() * array.length);
        // assign array at i to hold variable
        hold = array[i];
        // put element at randomIndex to i position
        array[i] = array[randomIndex];
        // put the element that is now in hold in the array at randomIndex
        array[randomIndex] = hold;
    } return array;
};

var isPalindrome = (string) => {
    // i: string
    // o: boolean, undefined if string is empty
    // c: consider upper and lowercases to be equivalent.
    // e: 
    
    // change string to all lower case
    string = string.toLowerCase();
    // // if string is empty, return undefined
    if (!string) {
        return undefined;
    }
  
    // base case
    if (string.length < 3) {
        return true
    } else {
        if (string[0] === string[string.length - 1]) {
            return isPalindrome(string.slice(1, string.length - 1))
        } else {
            return false;
        }
    }
}

const mergeObjects = (...obj) => {
    // i: a first object and a bunch of other objects
    // o: first object that now contains key/value pairs from all the other objects
    // c: if any of the other objects contain keys that the first object does, first object values should be updated with the other object values at that key
    // e: ^^?


    // create variable for (1) first object in arguments and (2) rest of objects in arguments
    const first = obj[0];
    const rest = obj.slice(1);

    // loop through rest of objects array
    for (let i = 0; i < rest.length; i++) {
        // loop through each object
        for (let key in rest[i]) {
            // add each key value pair to first object
            first[key] = rest[i][key];
        }
    }
    // return first object
    return first;
};


const semiMergeObjects = (...obj) => {
    // i: a first object and a bunch of other objects
    // o: first object that now contains key/value pairs from all the other objects, without overwriting k/v pairs that already exist in first obj
    // c: if any of the other objects contain keys that the first object does, first object values should not be updated with the other object values at that key
    // e: ^^?


    // create variable for (1) first object in arguments and (2) rest of objects in arguments
    const first = obj[0];
    const rest = obj.slice(1);

    // loop through rest of objects array
    for (let i = 0; i < rest.length; i++) {
        // loop through each object
        for (let key in rest[i]) {
            // if key does not already exist in first obj
            if (!first.hasOwnProperty(key)) {
                // add  key value pair to first object
                console.log(key);
                first[key] = rest[i][key];
            }
        }
    }
    // return first object
    return first;
};


//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    // i: obj, value, and new value to replace old value with
    // o: obj with replaced values
    // c: use recursion
    // e: what if there are nested objects?


    // loop through obj
    for (let key in obj) {
        // if key has value passed in, replace it with newValue
        if (obj[key] === value) {
            obj[key] = newValue;
        } 
        // if the value of object key is an object, call function on that key/value
        if (obj[key] instanceof Object) {
            replaceValuesInObj(obj[key], value, newValue);
        } 
    } return obj
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    // i: obj and new key/value pair to add 
    // o: obj with added values
    // c: use recursion
    // e: what if there are nested objects?

    // loop through obj
    for (let key in obj) {
        // if key is an object, add key value pair to that obj
        if (obj[key] instanceof Object) {
            addKeysToExistingObj(obj[key], newKey, newValue);
        } else {
            // add new key value pair to obj
            obj[newKey] = newValue;
        }
    }
    return obj;
};

var map = (arr, func, mappedArray = []) => {
    // i: arr, func to call on arr items, mapped array to return
    // o: mapped array
    // c: use recursion
    // e: 

    // base case
    if (!arr.length) {
        return mappedArray;
    }
    // recursive call
    return map(arr.slice(1), func, mappedArray.concat(func(arr[0])));
}


/////////////////////////////////////////////////////////////////
// REDUCE VS CHAINED METHODS
/////////////////////////////////////////////////////////////////

var comedians = [
    { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
    { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
    { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
    { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
    { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
    { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
    { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
    { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
    { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
    { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
];

/* Solve by chaining native methods of map and filter only */
var comediansFilteredAndMapped = (comedians) => {
    // i: array of comedian objects
    // o: a mapped array of objects
    // c: use filter and map
    // e:

    // call filter to get just comedians from 2005- and whose name length is >=10
    // call map to transform that info into new objects with appearanceNumber, name, and seasonsActive
    return comedians.filter((comedian) => {
        return comedian.begin >= 2005 && comedian.actor.length >= 10;
    }).map((comedian) => {
        return {
            appearanceNumber: "#" + comedian.number,
            name: comedian.actor,
            seasonsActive: comedian.end + 1 - comedian.begin
        }
    })
};

var comedianNamesFilteredAndMapped = (comedians) => {
    // i: array of comedian objects
    // o: array of comedian names
    // c: use filter and map
    // e:

    // call filter to get comedians from 2005 on whose full names are >10
    // call map to get just their names
    return comedians.filter((comedian) => {
        return comedian.begin >= 2005 && comedian.actor.length >= 10;
    }).map((comedian) => {
        return comedian.actor;
    })
};




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
    // i: array of comedian objects
    // o: a reduced array of objects
    // c: use reduce
    // e:

    // call reduce to get cast members from 2005 on whose full names are >10
    return comedians.reduce((reduced, comedian) => {
        if (comedian.begin >= 2005 && comedian.actor.length >= 10) {
            reduced.push({
                appearanceNumber: "#" + comedian.number,
                name: comedian.actor,
                seasonsActive: comedian.end + 1 - comedian.begin
            })
            }
        return reduced;
    },[])
};

var comediansReduced2 = (comedians) => {
    // i: array of comedian objects
    // o: a reduced array of objects
    // c: use reduce
    // e:

    // call reduce to get just the names of cast members from 2005 on whose full names are >10
    return comedians.reduce((reduced, comedian) => {
        if (comedian.begin >= 2005 && comedian.actor.length >= 10) {
            reduced.push(comedian.actor)
        }
        return reduced;
    }, [])
};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
