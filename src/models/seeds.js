const Artist = require('./artist')

// List all existing artists
Artist.find() // Find all artist documents
  .then( artists => { // Once it has loaded, this function will be called
    console.log('Artists:', artists)
  })
  .catch( error => {
    console.error(error)
  })

// Create artists
// Artist.create({ name: 'Phoenix' })
//   // When this has completed, this function will be called
//   .then( artist => {
//     console.log('Created artist',artist)
//   })

// Artist.create([
//   { name: 'The Strokes' },
//   { name: 'Arctic Monkeys' },
//   { name: 'Death Cab for Cutie' },
//   { name: 'Weezer' },
//   { name: 'Metric' },
//   { name: 'Temper Trap' }
// ])
// // When this has completed, this function will be called
// .then( artist => {
//   console.log('Created artist',artist)
// })