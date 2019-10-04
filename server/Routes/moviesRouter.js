const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();


router.get('/', (req, res) => {
    pool.query('SELECT * FROM "movies";')
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });

});


router.put('/', (req, res) => {
    let updateMovie = req.body;
    console.log(updateMovie);
    let queryText =
        `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3`;
    pool.query(queryText, [updateMovie.title, updateMovie.description, updateMovie.id])
        .then(results => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
});


module.exports = router
