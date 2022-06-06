const  router = require('express').Router();
const authController = require("../controller/auth");
const auth = require('../middlewares/auth');
// login endpint 
router.post("/login", authController.login);

router.post("/signup/co", authController.signupCo);

router.post("/signup/st", authController.signupSt);





module.exports = router;