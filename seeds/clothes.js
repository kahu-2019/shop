
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothes').del()
  .then(function () {
    // Inserts seed entries
    return knex('clothes').insert([
      {id: 1, title: 't-shirt', description: 'Basic t-shirt, it\'s all you need', price: 15, image: '/images/shirt'},
      {id: 2, title: 'jeans', description: 'They\'re blue, da ba dee da ba die', price: 40, image: '/images/jeans'},
      {id: 3, title: 'socks', description: '( ͡° ͜ʖ ͡°)', price: 7, image: '/images/socks'}
      ]);
    });
};
