const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const query = 'SELECT * FROM meals';
  pool.query(query)
    .then(result => {
        console.log('the result is',result);
         res.send(result.rows);
    })
    .catch(err => {
        console.log(`Uh oh there is a error, ${err}`);
        res.sendStatus(500);
    })
   
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
