const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getAllItems(db = connection){
    return db('clothes').select()
}

function getItem(id, db = connection){
    return db('clothes').select().where('id', id)
}

module.exports = {
    getAllItems,
    getItem
}