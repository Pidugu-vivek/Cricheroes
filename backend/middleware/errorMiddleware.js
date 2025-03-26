exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack)
  
    // Mongoose validation error
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((error) => error.message)
      return res.status(400).json({ message: "Validation failed", errors })
    }
  
    // Mongoose duplicate key error
    if (err.code === 11000) {
      return res.status(409).json({ message: "Duplicate field value entered" })
    }
  
    // JWT errors are handled in auth middleware
  
    // Default error
    res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    })
  }
  
  