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
      console.log('the result is', result);
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
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  const sqlQuery = ` 
  INSERT INTO meals (meal_name, meal_type, carbs, notes, date)
  VALUES ($1, $2, $3, $4, $5)
  `;

console.log('req.body',req.body.meal_name);
  const sqlParams = [
    req.body.meal_name,
    req.body.type,
    req.body.carbs,
    req.body.notes,
    req.body.selecteDate,
  ]
  console.log('did the date make it over',req.body.mealdate);

  pool.query(sqlQuery, sqlParams)
    .then(dbRes => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.log(`error in post meals ${err}`);
      res.sendStatus(500)
    });
});

module.exports = router;
