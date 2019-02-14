const testEnv = require('./test-environment')
const db = require('../server/db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getAllListings, gets all listings', () => {
    const expected = 3
    return db.getAllListings(testDb)
        .then(listings => {
            const actual = listings.length
            expect(actual).toBe(expected)
        })
        .catch(err => expect(err).toBeNull())
})


test('getListing, gets a single listing', () => {
    const expected = 'jeans'
    return db.getListing(2, testDb)
        .then(listing => {
            const actual = listing.title
            expect(actual).toEqual(expected)
        })
        .catch(err => expect(err).toBeNull())
})