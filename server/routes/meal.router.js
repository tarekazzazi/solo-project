const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/:id", rejectUnauthenticated, (req, res) => {
  const orderDate = req.params.id.split(",");

  // GET
  // meals between the startdate and endates provided
  // from orderDate array
  const query = `SELECT * FROM meals
  WHERE date BETWEEN $1 AND $2
  ORDER BY date ASC, meal_type ASC`;

  console.log("routerGet STARTDATE", orderDate);
  const sqlParams = [orderDate[0], orderDate[1]];
  pool
    .query(query, sqlParams)
    .then((result) => {
      console.log("the result is", result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`Uh oh there is a error, ${err}`);
      res.sendStatus(500);
    });
});

router.post("/", rejectUnauthenticated, (req, res) => {
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
  sqlQuery = `
  DELETE FROM "meals" 
  WHERE id = $1
  AND user_id = $2
  RETURNING *; 
  `;

  req.params.id = Number(req.params.id);

  sqlParams = [req.params.id, req.user.id];
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

router.put("/:id", rejectUnauthenticated, (req, res) => {
  const sqlQuery = ` UPDATE meals
  SET meal_name= $2 , meal_type= $3 , carbs= $4 , blood_sugar_lvl= $5
  WHERE id = $1
  `;

  const sqlParams = [
    req.body.mealId,
    req.body.mealName,
    req.body.mealType,
    req.body.totalMealCarbs,
    req.body.bloodSugarLvl,
  ];

  pool
    .query(sqlQuery, sqlParams)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Err in PUT", err);
      res.sendStatus(500);
    });
});

module.exports = router;
