const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  // GET route code here
  const query = "SELECT * FROM meals";
  pool
    .query(query)
    .then((result) => {
      console.log("the result is", result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`Uh oh there is a error, ${err}`);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  // POST route code here
  const sqlQuery = ` 
  INSERT INTO meals (user_id, meal_name, meal_type, carbs, notes, date)
  VALUES ($1, $2, $3, $4, $5, $6)
  `;

  console.log("req.body", req.body.meal_name);
  const sqlParams = [
    req.body.user,
    req.body.meal_name,
    req.body.type,
    req.body.carbs,
    req.body.notes,
    req.body.selecteDate,
  ];
  console.log("did the date make it over", req.body.mealdate);

  pool
    .query(sqlQuery, sqlParams)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`error in post meals ${err}`);
      res.sendStatus(500);
    });
});

// Delete Route

router.delete("/:id", rejectUnauthenticated, (req, res) => {
  console.log("body is", req.user.id);
  sqlQuery = `
  DELETE FROM "meals" 
  WHERE id = $1
  AND user_id = $2
  RETURNING *; 
  `;

  req.params.id = Number(req.params.id);

  sqlParams = [req.params.id, req.user.id];

  console.log("sql params are", req.params.id);
  console.log("SQL Qurey is", req.user.id);
  pool
    .query(sqlQuery, sqlParams)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error DELETE /api/meals", error);
      res.sendStatus(500);
    });
});

// Put Route
router.put("/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  // const sqlQuery = ` UPDATE meals
  // SET meal_name= $2
  // WHERE id = $1
  // `;
  // // `;
  // const sqlParams = [];
  // console.log("req.body is", sqlParams);
  // pool
  //   .query(sqlQuery, sqlParams)
  //   .then((dbRes) => {
  //     res.sendStatus(201);
  //   })
  //   .catch((err) => {
  //     console.log("Err in PUT", err);
  //     res.sendStatus(500);
  //   });
});

module.exports = router;
