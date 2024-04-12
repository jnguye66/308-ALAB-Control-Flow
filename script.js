// Part 1 Growing Pains

const pi = 3.1415; // pi
let radius = 15; // radius of plant containment area
const area = pi * radius * radius; // area of circle
const reqSpace = 0.8; // required space per plant

let numPlantFit = area / reqSpace;

let plants = 20; // starting amt of plants

let weeks = 1; // Number of weeks 

console.log(`Starting amount of plants: ${plants}`);

// Predict the plant growth after a specific number of weeks

for (i = 1; i <= weeks; i++){
plants *= 2;
}
console.log(`Plants after ${weeks} weeks: ${plants}`);
console.log(`Maximum number of plants that can fit: ${numPlantFit}`);

if ((plants / numPlantFit) > 0.8 && (plants / numPlantFit) <= 1){ // If current plants occupy more than 80% of max vacancy
    console.log(`Plants must be pruned.`);
} else if ((plants / numPlantFit) >= 0.5) { // If current plants occupy between 50% - 80% of max vacancy
    console.log(`Plants must be monitored.`); 
} else if ((plants / numPlantFit) >= 0){ // Anything below 50%
    console.log(`Plants must be planted`); 
}


// Part 2 Thinking Bigger 

let newPlants = 100;
let newWeek = 10;

for (i = 1; i <= newWeek; i++){
    newPlants *= 2;
}

console.log(`Plants after ${newWeek} weeks starting with 100 plants: ${newPlants}`);

let newArea = newPlants * reqSpace; // New total space needed

console.log(`Additional Space required for new plants: ${newArea} square meters`);

let newRadius = Math.sqrt(newArea / pi); // New radius to keep new area circular

console.log(`Radius of additional space is: ${newRadius} meters`);

// Part 3 Errors in Judgement

let scientistsPlants = 100; // Scientists bad idea of starting plants
let scientistsArea = 5; // Scientists bad idea of starting area

try {
    let spaceNeeded = scientistsPlants * reqSpace;
    console.log(`Space needed for scientists ${scientistsPlants} plants: ${spaceNeeded} square meters`);
    if (spaceNeeded > scientistsArea) {
        throw `Error - Area required for ${scientistsPlants} exceeds the allocated ${scientistsArea} square meter space given.`
    }
} catch (err) {
    console.log(err);
}
