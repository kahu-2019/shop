import request from 'superagent'

export function getAllListings() {
    return request.get('/api/listings/')
    .then(res => {
      return JSON.parse(res.text)
    })
    .catch(err => {
      throw Error('API error')
    })
}

export function getListing(id) {
  return request.get(`/api/listing/${id}`)
  .then(res => {
    return JSON.parse(res.text)
  })
  .catch(err => {
    throw Error('API error')
  })
}