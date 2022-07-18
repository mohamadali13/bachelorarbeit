const  router = require('express').Router();
const offerController = require("../controller/offer");
const auth = require('../middlewares/auth');

router.post("/add_offer", offerController.offerPost);

router.get("/get_all_offers", offerController.getAllOffers);

//router.get all offers
//get all offers for student
//get all offers for student
//get all offers upcomming for admin
//get all offers upcomming for company
//get all offers upcomming for student
//get all offer finished for admin
//get all offers finished for Company
//get all offers finsished for student
// get details for offer 
// change to upcoming admin
//change to finsished company
 

module.exports = router;