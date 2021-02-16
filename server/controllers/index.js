const { insertFoodController } = require('./insertFood');
const getUserCalories = require('./getUserCalories');
const getFood = require('./getFood');
const healthNews = require('./healthNews');
const signup = require('./signup');
const login = require('./login');
const foodCategory = require('./foodCategory');
const deleteFoodController = require('./deleteFood');
const editFood = require('./editFood');
const getFoodById = require('./getFoodById');
const getProfileData = require('./getProfile');

module.exports = {
  healthNews,
  login,
  signup,
  foodCategory,
  getFood,
  getUserCalories,
  getFoodById,
  insertFoodController,
  deleteFoodController,
  editFood,
  getProfileData,
};
