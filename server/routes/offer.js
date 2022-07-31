const router = require("express").Router();
const offerController = require("../controller/offer");

router.post("/add_offer", offerController.offerPost);

router.get("/get_all_offers", offerController.getAllOffers);

router.get("/getDetails/:id", offerController.getDetails);

router.post("/applay_offer", offerController.applayOffer);

router.get("/get_applied_student", offerController.getAppliedStudent);
router.get("/get_reqs", offerController.getApplayReq);
router.put("/approve_req_applay", offerController.approveReq);
router.get("/get_upComming_student", offerController.getUpcommingStudent);
router.get("/get_finished_student", offerController.getFinishedStudent);
router.get("/get_applied_company", offerController.getAppliedCompany);
router.get("/get_upcomming_company", offerController.getUpcommingCompany);
router.get("/get_finished_company", offerController.getFinishedCompany);

router.get("/get_offer_company", offerController.getOfferCompany);
router.get("/get_applied_admin", offerController.getAppliedAdmin);
router.get("/get_upcomming_admin", offerController.getUpcommingAdmin);
router.get("/get_finished_admin", offerController.getFinishedAdmin);
router.put("/reject_req_applay", offerController.rejectOffer);
router.put("/finish_offer_applay", offerController.finishOffer);
module.exports = router;
