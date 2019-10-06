const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    let movieId = req.params.id;
    console.log('/film/' + movieId);

    let queryText =

    `SELECT "movies".id, "genres".name, "movies".title, "movies".description, "movies".poster FROM "movies_genres"
    JOIN "genres" ON "genres".id = "movies_genres".genre_id
    JOIN "movies" ON "movies".id = "movies_genres".movie_id
    WHERE "movies".id = $1;`;
    
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