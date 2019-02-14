const express = require('express')
const router = express.Router()

const db = require('./db')

router.use(express.json())

router.get('/listings', (req, res) => {
    return db.getAllListings()
      .then(data => {
        return res.json(data)
      })
      .catch(err => {
        res.status(500).send('Server error')
      })
})

router.get('/listing/:id', (req, res) => {
    return db.getListing(req.params.id)
      .then(data => {
        return res.json(data)
      })
      .catch(err => {
        res.status(500).send('Server error')
      })
})


module.exports = router