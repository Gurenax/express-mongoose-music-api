const express = require('express')
const Artist = require('../models/artist')

const router = express.Router()

// Read all artists
router.get('/artists', (req, res) => {
  Artist.find()
    // Once it has loaded these documents
    .then(artists => {
      // Send them back as the response
      res.json(artists)
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
})

// Read an individual artist
router.get('/artists/:id', (req, res) => {
  const id = req.params.id
  // Ask the model for the document with this id
  Artist.findById(id)
    // Once it has loaded this document
    .then(artist => {
      // If an artist was found
      if(artist) {
        res.json(artist)
      }
      // If no artist was foound
      else {
        res.status(404).json({ error: `Artist not found with id: ${id}` })
      }
    })
    .catch(error => {
      // If there was an error, most likely with the format of the id
      res.status(400).json({ error: error.message })
    })
})

// Create
router.post('/artists', (req, res) => {
  const attributes = req.body
  if(attributes.name) {
    Artist.create(attributes)
      .then(artist => {
        res.status(201).json(artist)
      })
      .catch(error => {
        res.status(400).json({ error: error })
      })
  }
  else {
    res.status(403).json({ error: 'Name is required' })
  }
})

// Update
router.patch('/artists/:id', (req, res) => {
  const id = req.params.id
  const attributes = req.body
  Artist.findByIdAndUpdate(id, attributes, {new: true})
    .then(artist => {
      // If an artist was found and updated
      if(artist) {
        
        res.status(200).json(artist) //{artist: artist, update: attributes})
      }
      // If no artist was found
      else {
        res.status(404).json({ error: `Artist not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

// Destroy
router.delete('/artists/:id', (req, res) => {
  const id = req.params.id
  Artist.findByIdAndRemove(id)
    .then(artist => {
      // If an artist was found and deleted
      if(artist) {
        res.status(200).json(artist)
      }
      // If no artist was found
      else {
        res.status(404).json({ error: `Artist not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
  
})

module.exports = router