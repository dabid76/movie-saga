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

module.exports = router
