const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/:id', (req, res) => {
    let movieId = req.params.id;
    console.log('/film/' + movieId);

    let queryText =
    `SELECT * FROM "movies"
    JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
    JOIN "genres" ON "movies_genres".genre_id = "genres".id
    WHERE "movies".id = $1;` ;
    
    pool.query(queryText, [movieId])
        .then(results => {
            console.log(results.rows);
            res.send(results.rows)
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })


});


module.exports = router