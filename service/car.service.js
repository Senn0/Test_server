const jsonfile = require("jsonfile");

const getCarDB = () => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  return data;
};

const getCarOneDB = (id) => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  if (!id) throw "Нет нужного параметра";
  return data[id];
};

const postCarDB = (obj) => {
  let data = jsonfile.readFileSync("./models/car.json", (err, file) => {
    if (err) {
      console.error(err);
      throw error;
    }
  });
  let arr = [...data];
  arr.push(obj);

  jsonfile.writeFile("./models/car.json", arr, (error) => {
    if (err) {
      console.error(err);
      throw error;
    }
  });

  return true;
};

const updateCarDB = (id) => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  let result = data[id];
  result.name = "York";
  result.model = "York";
  result.years = "York";
  result.price = "York";
  return result;
};

module.exports = { getCarDB, getCarOneDB, postCarDB, updateCarDB };
