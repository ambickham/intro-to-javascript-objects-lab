const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
   }
//   console.dir(pokemon, { maxArrayLength: null })
// //Command used in JS to inspect objects in detail.//

// console.log(pokemon.length)// Show data values of hte array
// console.table(pokemon) // Shows a readable table view of the array dataset
// console.log(game)
// // What I found: I see the total items in arrays in party, gyms, and items.
// console.table(game)
// table for game doesn't show the data values, but I do see that each row as an array. 
//console.dir(game)

/*----------------------------------------------------
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


// Solve Exercise 3 here:*/

// game.difficulty = [ "advanced", "meduium", "low"]

// console.log(game.difficulty)
// (3) ['advanced', 'meduium', 'low']
// 0
// : 
// "advanced"
// 1
// : 
// "meduium"
// 2
// : 
// "low"
// length
// : 
// 3

//---------------------------------

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
// */

// const chosenStarter = pokemon.find(p => p.starter === true);
// //.find() gives the first matching Pokémon where starter is true. 
// // Add this to the array by using .push 

// game.party.push(chosenStarter);
// console.log(game.party)

// //Note: Not game.chosenStarter, instead game.party becuase game.chosenStarter isn't an explicit variable that was assigned. I am only just using it as a temporary variable to:
// // 1) find the starter Pokemon in the pokemon array
// // 2) Store it in a variable that I am calling (chosenStarter)
// // User that variable to push the pokement into game.party 
// //-------------------------------

// /*
// Exercise 5
// 1. Choose three more Pokémon from the `pokemon` array and add them to your party.
// 2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

// Solve Exercise 5 here:
// */
// //Declaring 1x
//  const starterFiltered = pokemon.filter(p => p.starter === true);
// const starterChosen = starterFiltered.slice(0, 3); // building in at least 3 possible starters

// //Declaring type and Hp levels
// const chosenType = pokemon.filter(p => ['fire'].includes(p.type) && p.hp > 40);
// game.party.push(...starterChosen, ...chosenType); // Adding filtered Pokemon
// console.log(game.party);

// /* I am on the right track! I don't need to separate the hp, since I am just filter
//  on type but across each array, hp exists. So I can combine */ 
 
//  game.party.push(chosenStarter); //Adding starter
// console.log(game.party)

// Printed Result or starter
// {number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true}: 
// {number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true}
// {number: 7, name: 'Squirtle', type: 'water', hp: 44, starter: true}

// // Exercise 5 printed successfully! 
// // ------------------------
// Exercise 6
// 1. Set the `completed` property to true for gyms with a difficulty below 3.
// 2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


// Solve Exercise 6 here:
// */
// const easyGyms = game.gyms.filter(gym => gym.difficulty < 3);
// easyGyms.forEach(gym => {
//   gym.completed = true;
// });

// console.log(game.gyms); // To see the updated gyms array

  

// Exercise 7
// 1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
// 2. How would you replace the current starter Pokémon in your party with its evolved form?
// Hint: 
  // - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  // - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  // - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle

// More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. 
// When working with an array of objects, the splice() array method is ideal for replacing one element with another. 
// Solve Exercise 7 here:

// Ashmeeta's starter party array From #5
// let party = [
//  {number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true}: 
//  {number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true}
//  {number: 7, name: 'Squirtle', type: 'water', hp: 44, starter: true}

// Step 1: Evolve the starter Pokémon. (Charmander (id 4) evolves into Charmeleon (id 5))
let party = [
  {number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true},
  {number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true},
  {number: 7, name: 'Squirtle', type: 'water', hp: 44, starter: true},
]
 //** I didn't see a ; at the end of the syntax, instead needed a ,  */ 
// Step 2: Replace the starter Pokémon with its evolved form. Find the index of each 
let evolvedPokemonList = [
 { number: 5, name: 'Charmeleon', type: 'fire', hp: 39, starter: false},
 { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false},
 { number: 8, name: 'Wartortle', type: 'water', hp: 59, starter: false},
]

// Step 3: loop through each evolved Pokémon to replace in the party array
evolvedPokemonList.forEach(evolvedPokemon => {
  let index = party.findIndex(pokemon => pokemon.type === evolvedPokemon.type);
  if (index !== -1) {
    // replace old pokemond with it's evolved form
    party.splice(index, 1, evolvedPokemon);
  }  
});
// Step 4: Log the updated party

 console.log(party);

 /* Notes: Syntax and consistency errors
