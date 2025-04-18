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