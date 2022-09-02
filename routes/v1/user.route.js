const express = require("express");
const userController = require("../../controllers/userControllers");
const router = express.Router();

router.route("/random").get(userController.getRandomUser);

router.route("/all").get(userController.getAllUser);

router.route("/save").post(userController.addUser);

router.route("/update/:id").patch(userController.updateUser);

router.route("/bulk-update/:Id").patch(userController.bulkUpdateUser);

router.route("/delete/:id").delete(userController.deleteUser);

module.exports = router;
