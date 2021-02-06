BEGIN;

DROP TABLE IF EXISTS users, activity, exercises, food, food_category, food_type, nutrition, UserExerciseRelation, UserFoodRelation, news CASCADE;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
lastName VARCHAR(100),
email VARCHAR (100),
password VARCHAR(250),
firstName VARCHAR(100) NOT NULL,
gender VARCHAR(100),
minAge INTEGER,
maxAge INTEGER,
weight INTEGER,
height INTEGER,
goalWeight INTEGER,
dailyCaloriesGoal INTEGER
);


CREATE TABLE activity(
id SERIAL PRIMARY KEY,
activity_name VARCHAR(100) NOT NULL 
);


CREATE TABLE exercises(
id SERIAL PRIMARY KEY,
exercise_name VARCHAR(100) NOT NULL,
met Float NOT NULL
);


CREATE TABLE food_category(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL 
);

CREATE TABLE food_type(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL 
);

CREATE TABLE food(
id SERIAL PRIMARY KEY,
food_type_id INTEGER REFERENCES food_type(id) ON DELETE CASCADE ON UPDATE CASCADE,
food_name VARCHAR(100) NOT NULL,
image TEXT
);

CREATE TABLE nutrition(
id SERIAL PRIMARY KEY,
food_id INTEGER REFERENCES food(id) ON DELETE CASCADE ON UPDATE CASCADE,
calories INTEGER,
fat INTEGER,
carbs INTEGER,
protein INTEGER,
sugar INTEGER,
vitamin_A INTEGER,
vitamin_C INTEGER,
vitamin_D INTEGER,
cholesterol INTEGER
);

CREATE TABLE UserExerciseRelation(
id SERIAL PRIMARY KEY,
users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
exercises_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE ON UPDATE CASCADE,
created_at TIMESTAMP NOT NULL
);


CREATE TABLE UserActivityRelation(
id SERIAL PRIMARY KEY,
users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
activity_id INTEGER REFERENCES activity(id) ON DELETE CASCADE ON UPDATE CASCADE,
);


CREATE TABLE UserFoodRelation(
id SERIAL PRIMARY KEY,
users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
food_id INTEGER REFERENCES food(id) ON DELETE CASCADE ON UPDATE CASCADE,
food_category_id INTEGER REFERENCES food_category(id) ON DELETE CASCADE ON UPDATE CASCADE,
created_at TIMESTAMP NOT NULL
);

CREATE TABLE news(
id SERIAL PRIMARY KEY,
users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
title VARCHAR(250),
content VARCHAR(250),
created_at TIMESTAMP NOT NULL
);

COMMIT;