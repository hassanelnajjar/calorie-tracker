const { insertFoodController } = require('./insertFood');
const getUserCalories = require('./getUserCalories');
const getFood = require('./getFood');
const healthNews = require('./healthNews');
const signup = require('./signup');
const login = require('./login');
const foodCategory = require('./foodCategory');
const logout = require('./logout');
const deleteFoodController = require('./deleteFood');
const editFood = require('./editFood');
const getFoodById = require('./getFoodById');
const getProfileData = require('./getProfile');
const isAuth = require('./isAuth');
const getExercises = require('./getExercises');

module.exports = {
  healthNews,
  login,
  signup,
  foodCategory,
  getFood,
  getUserCalories,
  getFoodById,
  insertFoodController,
  isAuth,
  logout,
  deleteFoodController,
  editFood,
  getProfileData,
  getExercises,
};
