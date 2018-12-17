const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.get('/', (req, res) => {
    // return all projects
    const queryText = `SELECT * FROM projects ORDER BY id ASC`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;