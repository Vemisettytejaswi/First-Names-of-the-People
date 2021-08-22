const name = require("../country/state/city/index");
const list = require("../utilities/utils/index");
const getPeopleInCity = (name) => {
  return list(name);
};
module.exports = getPeopleInCity;
