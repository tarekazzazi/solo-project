# DB Tracker

DB Tracker is a app that helps people with diabeties manage all there information and eat better
by allowing them to create a weekly meal plan to track the amount of calories they consume per 
meal and take their blood sugar level with each meal.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

- Fork repository and git clone it onto your computer
- Create database and open in visual studio code

## Create database and table

Create a new database called `meal_planner` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR(255),
	"wieght" INTEGER,
	"max_carbs" INTEGER,
	"doctor_notes" VARCHAR(255)
);

CREATE TABLE "meals" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER,
    "date" DATE,
    "meal_name" VARCHAR(255),
    "meal_type" VARCHAR(255),
    "carbs" INTEGER,
    "blood_sugar_lvl" INTEGER,
    "notes" VARCHAR(255)
);
```

## Development Setup Instructions

- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://www.allkeysgenerator.com/](https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx#)
- Run `npm install`
- Run `npm start`
- Run `npm run client`
- Navigate to `localhost:3000`
- Create a user by clicking on register
- Fill out the form and click save button
- Login

### Prerequisites

What things you need to install the software and how to install them

```
Postgres SQL version 14.5 (https://www.postgresql.org/)
Postico version 1.5.20 (https://eggerapps.at/postico/)
```

## Built With

- [React](https://17.reactjs.org/docs/getting-started.html) - The framework used
- [NPM](https://docs.npmjs.com/getting-started) - Dependency Management
- Javascript object-oriented computer programming language
- CSS Cascadeing Style Sheets
- HTML HyperText Markup Language
- SQL Structured Query Language

# Libraries Used

- [Material_Ui] (https://mui.com/)
- [Chart.Js2] (https://www.chartjs.org/)
- [Moment] (https://momentjs.com/)
- [sweetalert2] (https://sweetalert2.github.io/)
- [react-week-picker] (https://www.npmjs.com/package/react-week-picker)
