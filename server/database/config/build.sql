BEGIN;

DROP TABLE IF EXISTS users, exercises, food, food_category, food_type, nutrition, UserExerciseRelation, UserFoodRelation, news CASCADE;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
email VARCHAR (100) NOT NULL UNIQUE,
password VARCHAR(250) NOT NULL ,
gender CHAR(1),
height float,
weight INTEGER,
age INTEGER,
image TEXT,
daily_calories_goal float
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
calories float,
fat float,
carbs float,
protein float,
sugar float,
vitamin_A float,
vitamin_C float,
vitamin_D float,
cholesterol float
);

CREATE TABLE UserExerciseRelation(
id SERIAL PRIMARY KEY,
users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
exercises_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE ON UPDATE CASCADE,
created_at TIMESTAMP NOT NULL
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