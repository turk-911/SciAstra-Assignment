const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
router.get('/', courseController.getAllCourses);
router.post('/purchase', courseController.purchaseCourses);
module.exports = router;