
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "cars"; ALTER SEQUENCE cars_id_seq RESTART WITH 4;')
    .then(function () {
      var cars = [{
        id: 1,
        make: 'Honda',
        model:'Civic',
        year:2010,

      }, {
        id: 2,
        make: 'Audi',
        model:'A5',
        year:2015,
      },
      {
        id: 3,
        make: 'Ford',
        model:'Pinto',
        year:1970,
      }
    ];
      return knex('cars').insert(cars);
    });
};