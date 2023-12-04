/*
This file exports two array helper functions:
- *choice(items)*: returns a randomly selected item from array of items
- *remove(items, item)*: removes the first matching item from items, 
if item exists, and returns it. Otherwise returns undefined.
*/

// Returns random item from array called items
function choice(items){
    const arrayLength = items.length;
    // “Math.random()” function gets the random number between(0-1, 1 exclusive).
    // Multiply it by arrayLength to get the numbers between(0-arrayLength).
    // Use the “Math.floor()” to get the index ranging from(0 to arrayLength-1).
    return items[(Math.floor(Math.random() * arrayLength))]
}
// - *remove(items, item)*: removes the first matching item from items, 
// if item exists, and returns it. Otherwise returns undefined.
function remove(items,item){
    if (items.indexOf(item)!== -1){
        // Find the index of the array element you want to remove using indexOf
        let indexOfItem = items.indexOf(item);
        // remove an element at the index called indexOfItem
        return items.splice(indexOfItem, 1);
    }
    return undefined;
}
export{ choice, remove }

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf