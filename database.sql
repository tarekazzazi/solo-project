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

