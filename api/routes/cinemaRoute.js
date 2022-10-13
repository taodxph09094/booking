const express = require("express");
const {
  createCinema,
  getCinema,
  updateCinema,
  deleteCinema,
  getCinemaDetails,
} = require("../controllers/cinemaController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router.route("/cinema/create").post(isAuthenticatedUser, createCinema);
router.route("/admin/cinema").get(isAuthenticatedUser, getCinema);
router.route("/cinema/:id").get(getCinemaDetails);
router
  .route("/admin/cinema/:id")
  .put(isAuthenticatedUser, updateCinema)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCinema);

module.exports = router;
