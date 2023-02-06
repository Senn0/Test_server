const { getCarDB } = require("../services/car.service");
const { getCarOneDB } = require("../services/car.service");

const getCar = (req, res) => {
  const data = getCarDB();
  res.status(200).json(data);
};

const getCarOne = (req, res) => {
  const id = req.params.id;
  const data = getCarOneDB(id);
  res.status(200).json(data);
};
const postCar = (req, res) => {
  console.log(req);
  res.status(200).json("Создание машины");
};
const updateCar = (req, res) => {
  res.status(200).json("Обновление машины");
};
const deleteCar = (req, res) => {
  res.status(200).json("Удаление машины");
};

module.exports = {
  getCar,
  postCar,
  deleteCar,
  updateCar,
  getCarOne,
};
