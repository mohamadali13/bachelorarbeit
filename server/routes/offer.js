const router = require("express").Router();
const offerController = require("../controller/offer");
const auth = require("../middlewares/auth");
const authRoleAdmin = require("../middlewares/admin");
const authRoleStudent = require("../middlewares/student");
const authRoleCompany = require("../middlewares/company");



router.post("/add_offer", [auth, authRoleCompany], offerController.offerPost);

router.get("/get_all_offers", auth, offerController.getAllOffers);

router.get("/getDetails/:id", [auth], offerController.getDetails);

router.post(
  "/applay_offer",
  [auth, authRoleStudent],
  offerController.applayOffer
);

router.get(
  "/get_applied_student",
  [auth, authRoleStudent],
  offerController.getAppliedStudent
);
router.get("/get_reqs", [auth, authRoleAdmin], offerController.getApplayReq);
router.put(
  "/approve_req_applay",
  [auth, authRoleAdmin],
  offerController.approveReq
);
router.get(
  "/get_upComming_student",
  [auth, authRoleStudent],
  offerController.getUpcommingStudent
);
router.get(
  "/get_finished_student",
  [auth, authRoleStudent],
  offerController.getFinishedStudent
);
router.get(
  "/get_applied_company",
  [auth, authRoleCompany],
  offerController.getAppliedCompany
);
router.get(
  "/get_upcomming_company",
  [auth, authRoleCompany],
  offerController.getUpcommingCompany
);
router.get(
  "/get_finished_company",
  [auth, authRoleCompany],
  offerController.getFinishedCompany
);

router.get(
  "/get_offer_company",
  [auth, authRoleCompany],
  offerController.getOfferCompany
);
router.get(
  "/get_applied_admin",
  [auth, authRoleAdmin],
  offerController.getAppliedAdmin
);
router.get(
  "/get_upcomming_admin",
  [auth, authRoleAdmin],
  offerController.getUpcommingAdmin
);
router.get(
  "/get_finished_admin",
  [auth, authRoleAdmin],
  offerController.getFinishedAdmin
);
router.put(
  "/reject_req_applay",
  [auth, authRoleAdmin],
  offerController.rejectOffer
);
router.put(
  "/finish_offer_applay",
  [auth, authRoleCompany],
  offerController.finishOffer
);
router.delete(
  "/delete_offer",
  [auth, authRoleCompany],
  offerController.delteOffer
);


module.exports = router;
