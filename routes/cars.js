var express = require('express');
var router = express.Router();
const knex = require('../db/connection');


// get all from database
router.get('/', (request, response, ) => {
  //query the database
  //get relevant data
  // send data
  knex('cars')
  .orderBy('id', 'asc')
  .then(ballons =>{
    response.json(ballons)
  })
})
router.get('/:id', (request, response, next) =>{
    const id = request.params.id
    knex('cars')
    .select('*')
    .where('id', id)
    .then( cars => {
        response.json(cars[0])
    })
})
router.post('/', (request,response,next) => {
    knex('cars')
    .insert(request.body, '*')
    .then(record => record[0])
    .then(event => {
        response.status(201).json({
            event
        });
    })
})
router.put('/:id', (request, response, next)=>{
    const id = request.params.id
    knex('cars')
    .where('id', id)
    .update(request.body, '*')
    .then((event) => {
        response.json({
            event
        });
    })
})

router.delete('/:id', (request, response, next) =>{
    const id = request.params.id
    knex('cars')
    .where('id', id)
    .del()
    .then((()=>{
        response.status(202).json({
            deleted: true
        });
    }))
})



module.exports = router;