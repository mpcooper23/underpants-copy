// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
if (Array.isArray(value)){
    return 'array';
}else if (value === null){
    return 'null';
}else {
    return typeof value;
}
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*I: an array, number
*O: first, determine if first parameter/input is an array (return [], if no); 
//second, determine if second parameter is a number datatype 
//or null (return first element of array, if so), for third case, 
just return the first number items in array (i.e. 2 = ['a', 'b'])
*C:
*E:
*/

_.first = function(arr, num){
if(!Array.isArray(arr)){//first
    return [];
}
if (typeof num !== 'number'){//second
    return arr[0];
}
if (num > arr.length){//Edge case: What if <number> is greater than <array>.length?
    return arr
}
if (num < 0){ //Edge Case: what if number is negative?
    return []
}
return arr.slice(0, num); //STUDY SLICE!!!
}




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*I: an array, number
*O: first, determine if first parameter/input is an array (return [], if no); 
//second, determine if second parameter is an inputted number 
//or null (return LAST element of array, if so), for third case, 
just return the LAST number items in array (i.e. 2 = ['a', 'b'])
*C:
*E:
*/
_.last = function(arr, num){
    if(num < 0){//What if <number> is negative?
        return []
    }
    if (num > arr.length){//What if <number> is greater than <array>.length?
        return arr
    }
    if (!Array.isArray(arr)){//If <array> is not an array, return []
        return []
    } if(typeof num !== 'number'){//If <number> is not given or not a number, 
    return arr[arr.length - 1]     //return just the last element in <array>.
    }
return arr.slice(arr.length - num)//STUDY SLICE!!!
}



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, val) {
//Return -1 if <value> is not in <array>
if (!Array.isArray(arr)){//Return -1 if <value> is not in <array></array>
    return - 1
}else {
for(let i = 0; i < arr.length; i++){
    if (arr[i] === val) {
        return i //just return index of first occurence, not arr[i]
    }
  }
}
return - 1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, val) {
    if (val === undefined){
return false;
    }
     for (let i = 0; i < arr.length; i++){
    if (arr[i] === val) {
        return true
     }
    }
      return false;
    
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) { //first Underpants higher-order func 
if (Array.isArray(collection)){//if collection is arr
for (let i = 0; i < collection.length; i++){//loop to call func on each element
    
        func(collection[i], i, collection)
    }
}else if (typeof collection === 'object' && collection !== null){//ELSE IF collection is obj
for(let key in collection){ //loop over keys
    func(collection[key], [key], collection)//invoke callback on each key
}
    }
  }


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(arr) {
    let uniqueArr = [];
for(let i = 0; i < arr.length; i++){//loop
   if(_.indexOf(uniqueArr, arr[i]) === -1){//invoke _.indexOf to check if element 
    uniqueArr.push(arr[i])                   // is already in uniqueArr;
   }                                           //if not, push element in uniqueArr
}
return uniqueArr;          //remember to return uniqueArr (just before final curly bracket)
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    //create output array
const output = [];
//iterate using for loop
for (let i = 0; i < array.length; i++)
//determine if the result of invoking the callback on the current item, index, and array is true
if(func(array[i], i, array) === true){
    output.push(array[i]);
}
    //returning output
    return output
}

//var evens = _.filter([10, 11, 12, 13], function(num){return num % 2 === 0})



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse of _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr, func) {
    let newArr = [];
for (let i = 0; i < arr.length; i++){
    func(arr[i], i, arr)
if(func(arr[i], i, arr) === false){
    newArr.push(arr[i])
}
}
return newArr
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing in the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(arr, func) {

let truthyArr = [];
let falsyArr = [];
for(let i = 0; i < arr.length; i++){
    if(func(arr[i], i, arr)){
        truthyArr.push(arr[i])
}else {
        falsyArr.push(arr[i])
    }
}
return [truthyArr, falsyArr]
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    const output = [];//set output arr
    if(Array.isArray(collection)){ //check to see if collection is array
        for(let i = 0; i < collection.length; i++){//loop; if true, return function invocation
            output.push(func(collection[i], i, collection))
        }
    }else { //check if it's an object, if not an array
        for(let key in collection){//for-in loop object
            output.push(func(collection[key], key, collection))//if true, return func invocation
        }
    } 
   return output
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arr, prop) {
return _.map(arr, function(obj){//anonymous func invocation on each obj that map iterates over
return obj[prop]; //remember that .map transforms elements that are then pushed in a new array to return
}); //_.pluck uses _.map to create a new arr by applying a func to each element in the arr parameter. 
}.   //the inner-func extracts the value of the specified prop from each obj, returning an arr of those values

//example usage ===> console.log(_.pluck([{a: "one"}, {b: "two"}, {a: "three"}], "a")) // logs ["one", "three"]

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
//determine if collection is an array
if (Array.isArray(collection)){
    if (func === undefined){
for(let i = 0; i < collection.length; i++){
    if(!collection[i]){
        return false
    }
}
    }else {
        for (let i = 0; i < collection.length;i++){
            if(!func(collection[i], i, collection)){
                return false
            }
        }
    }

}
return true
}




/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
if (array.isArray(collection)){
    func(collection[i], i, collection)
}else if (value === isObject(collection)){
    func(collection[key], [key], collection)
}
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    let output;
    //determine if seed value was not provided
    if(seed === undefined){
output = array[0];
for(let i = 1; i <array.length; i++){
    //reassign output to the result of invoking the callback function
output = func(output, array[i], i)// what do we think is happening here?
}
    }else {output = seed;
    for(let i = 0; i < array.length; i++){
        output = (func(output, array[i], i));
    }
}
return output;
    };


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/



_.extend = function() {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}