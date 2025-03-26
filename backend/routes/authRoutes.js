const express = require("express")
const { body } = require("express-validator")
const authController = require("../controllers/authController")
const { authenticate } = require("../middleware/authMiddleware")

const router = express.Router()

// Signup route
router.post(
  "/signup",
  [
    body("firstName").trim().isLength({ min: 2 }).withMessage("First name must be at least 2 characters"),
    body("lastName").trim().isLength({ min: 2 }).withMessage("Last name must be at least 2 characters"),
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
  ],
  authController.signup,
)

// Login route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  authController.login,
)

// Get current user route (protected)
router.get("/me", authenticate, authController.getCurrentUser)

module.exports = router

