const express = require("express")
const { body } = require("express-validator")
const userController = require("../controllers/userController")
const { authenticate } = require("../middleware/authMiddleware")

const router = express.Router()

// All routes in this file require authentication
router.use(authenticate)

// Get user profile
router.get("/profile", userController.getUserProfile)

// Update user profile
router.put(
  "/profile",
  [
    body("firstName").optional().trim().isLength({ min: 2 }).withMessage("First name must be at least 2 characters"),
    body("lastName").optional().trim().isLength({ min: 2 }).withMessage("Last name must be at least 2 characters"),
  ],
  userController.updateUserProfile,
)

module.exports = router

