"use strict"


/**
 * @desc     Auth middleware
 */
 module.exports = (req, res, next) => {
  if (req.header("role") !== "student")
    return res.status(403).json({
      message: "Access denied.",
    });
  next();
};