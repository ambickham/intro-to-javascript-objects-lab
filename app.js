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
*/

const chosenStarter = pokemon.find(p => p.starter === true);
//.find() gives the first matching Pokémon where starter is true. 
// Add this to the array by using .push 

game.party.push(chosenStarter);
console.log(game.party)

//Note: Not game.chosenStarter, instead game.party becuase game.chosenStarter isn't an explicit variable that was assigned. I am only just using it as a temporary variable to:
// 1) find the starter Pokemon in the pokemon array
// 2) Store it in a variable that I am calling (chosenStarter)
// User that variable to push the pokement into game.party 
//-------------------------------



