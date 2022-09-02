const data = require("../data/data.json");

module.exports.getRandomUser = (req, res, next) => {
  res.send("First Random User Check");
};
module.exports.getAllUser = (req, res, next) => {
  res.send(data);
};
module.exports.addUser = (req, res, next) => {
  res.send("Add User Check");
};
module.exports.updateUser = (req, res, next) => {
  res.send("Update User Check");
};
module.exports.bulkUpdateUser = (req, res, next) => {
  res.send("Bulk Update User Check");
};
module.exports.deleteUser = (req, res, next) => {
  res.send("Delete User Check");
};
