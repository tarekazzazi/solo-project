-- DataBase: meal_planner

-- User Table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR(255),
	"wieght" INTEGER,
	"max_carbs" INTEGER,
	"doctor_notes" VARCHAR(255)
);

-- Meal Table
CREATE TABLE "meals"(
"id" SERIAL PRIMARY KEY,
"user_id" INTEGER,
"date" DATE,
"meal_name" VARCHAR(255),
"meal_type" VARCHAR(255),
"carbs" INTEGER,
"blood_sugar_lvl" INTEGER,
"notes" VARCHAR(255)
);

-- Dummy Data

INSERT INTO meals (user_id, date, meal_name, meal_type, carbs,blood_sugar_lvl)
 VALUES 
 (1,'2022/08/24','Apple pie', 'Breakfast', 120, 125), 
 (1,'2022/08/24','sandwich', 'Lunch', 125, 135),
 (1,'2022/08/24','pizza', 'Dinner', 130, 125),
 (1,'2022/08/25','Cearl', 'Breakfast', 120, 100), 
 (1,'2022/08/25','Soup', 'Lunch', 110, 140),
 (1,'2022/08/25','pizza', 'Dinner', 125, 130),
 (1,'2022/08/26','Eggs', 'Breakfast', 120, 100), 
 (1,'2022/08/26','Grilled Cheese', 'Lunch', 110, null),
 (1,'2022/08/26','Cheesburger', 'Dinner', 125, null
 );
  
