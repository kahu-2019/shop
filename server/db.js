const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getAllListings(db = connection){
    return db('clothes').select()
}

function getListing(id, db = connection){
    return db('clothes').select().where('id', id)
}

module.exports = {
    getAllListings,
    getListing
}