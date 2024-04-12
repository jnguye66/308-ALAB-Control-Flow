// Part 1 Growing Pains

const pi = 3.1415; // pi
// const area = pi * radius * radius; // area of circle
const reqSpace = 0.8; // required space for each plant

let plants = 20; // starting amt of plants

let weeks = 5;

console.log(`Starting amount of plants: ${plants}`);

// Predict the plant growth after a specific number of weeks
for (i = 1; i <= weeks; i++){
    plants *= 2;
}
console.log(`Plants after ${weeks} weeks: ${plants}`);

