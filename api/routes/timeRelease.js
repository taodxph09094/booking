const express = require("express");
const {
  deleteTimeRelease,
  createTimeRelease,
  getTimeRelease,
  updateTimeRelease,
  getAdminTimeRelease,
  getTimeReleaseDetails,
} = require("../controllers/timeReleaseController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/timeReleases").get(getTimeRelease);
router
  .route("/admin/timeRelease/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createTimeRelease);
router
  .route("/admin/timeReleases")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminTimeRelease);
router.route("/timeRelease/:id").get(getTimeReleaseDetails);
router
  .route("/admin/timeRelease/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateTimeRelease)
  .delete(
    isAuthenticatedUser,
    authorizeRoles("admin", "manager"),
    deleteTimeRelease
  );

module.exports = router;
