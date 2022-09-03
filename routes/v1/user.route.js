const express = require("express");
const userController = require("../../controllers/userControllers");
const router = express.Router();

/**
 * @api {get} /tools Random user
 * @apiDescription Get single random user
 *
 * @apiSuccess {object[]} all the tools
 *
 * @apiError {data filed 401}
 */
router.route("/random").get(userController.getRandomUser);
/**
 * @api {get} /tools all user
 *
 * @apiSuccess {object[]} all the tools
 *
 * @apiError {data filed 401}
 */
router.route("/all").get(userController.getAllUser);
/**
 * @api {post} /Save single user
 * @apiDescription add user and response all data
 *
 * @apiHeader {String} all data give a string
 *
 *
 * @apiSuccess {object[]} all the user
 *
 * @apiError (401 failed data) Forbidden only admin access the data
 */
router.route("/save").post(userController.addUser);

/**
 * @api {patch} / single update user
 * @apiDescription add user and response all data
 *
 * @apiHeader {String} all data give a string
 *
 *
 * @apiSuccess {object[]} all the user
 *
 * @apiError (401 failed data) Forbidden only admin access the data
 */
router.route("/update/:id").patch(userController.updateUser);

/**
 * @api {patch} /Multi update user information
 * @apiDescription Bulk update and response all data
 *
 * @apiHeader {String}  give array in multiple object
 *
 * @apiSuccess {object[]} all the user
 *
 * @apiError (401 failed data) Forbidden only admin access the data
 */

router.route("/bulk-update").patch(userController.bulkUpdateUser);

/**
 * @api {delete} /Delete single user
 * @apiSuccess {object[]}
 */

router.route("/delete/:id").delete(userController.deleteUser);

module.exports = router;
