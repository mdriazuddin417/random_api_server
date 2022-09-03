const data = require("../data/data.json");

module.exports.getRandomUser = (req, res, next) => {
  const result = data[parseInt(Math.random() * data.length)];
  if (result) {
    res.status(200).send({
      success: true,
      data: result,
      message: "Success",
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Failed",
    });
  }
};
module.exports.getAllUser = (req, res, next) => {
  const { limit } = req.query;
  try {
    res.status(200).send({
      success: true,
      data: data.slice(0, limit),
      message: "Success",
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      error: error,
      message: "Failed",
    });
  }
};
module.exports.addUser = (req, res, next) => {
  const newUser = req.body;
  const { id, name, address, contact, photoUrl, gender } = newUser;

  if (id && name && address && contact && photoUrl && gender) {
    data.push(newUser);
    res.status(200).send({
      success: true,
      data: data,
      message: "Success",
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Failed",
    });
  }
};
module.exports.updateUser = (req, res, next) => {
  const itemId = req.params.id;
  const update = req.body;
  const checkId = data.some(({ id }) => id == Number(itemId));

  const { name, address, photoUrl, contact, gender } = update;

  if (checkId === true) {
    const newData = data.filter((item) => item.id == Number(itemId));
    newData[0].id = itemId;
    {
      name && (newData[0].name = name);
    }
    {
      address && (newData[0].address = address);
    }
    {
      contact && (newData[0].contact = contact);
    }
    {
      photoUrl && (newData[0].photoUrl = photoUrl);
    }
    {
      gender && (newData[0].gender = gender);
    }

    res.status(200).send({
      success: true,
      data: data,
      message: "Success",
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Not found Id",
    });
  }
};
module.exports.bulkUpdateUser = (req, res, next) => {
  const updateValue = req.body;
  if (updateValue) {
    for (const value of updateValue) {
      const update = data.filter((item) => item.id == Number(value.id));
      update[0].name = value.name;
      update[0].contact = value.contact;
    }
    res.status(200).send({
      success: true,
      data: data,
      message: "Success",
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Failed",
    });
  }
};
module.exports.deleteUser = (req, res, next) => {
  const ItemId = req.params.id;

  const checkId = data.some(({ id }) => id == Number(ItemId));
  console.log(checkId);
  if (checkId === true) {
    const newData = data.filter((item) => item.id !== Number(ItemId));
    res.status(200).send({
      success: true,
      data: newData,
      message: "Success",
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Not found Id",
    });
  }
};
