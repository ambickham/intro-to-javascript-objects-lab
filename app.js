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

/*
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