// Ensure we have established a connection to the database
const mongoose = require('./init')

// Define our model
const Artist = mongoose.model('Artist', {
  name: { type: String, required: [true, 'name required'] }
})

module.exports = Artist