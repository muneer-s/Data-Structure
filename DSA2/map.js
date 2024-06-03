// Creating a Map
let myMap = new Map();

// Adding key-value pairs
myMap.set('key1', 'value1');
myMap.set(42, 'value2');
myMap.set({ name: 'John' }, 'value3');

// Getting values
console.log(myMap.get('key1'));  // Output: value1
console.log(myMap.get(42));       // Output: value2

// Checking if a key exists
console.log(myMap.has('key1'));   // Output: true

// Deleting a key-value pair
myMap.delete('key1');

// Iterating over the map
for (let [key, value] of myMap) {
    console.log(key, value);
}
