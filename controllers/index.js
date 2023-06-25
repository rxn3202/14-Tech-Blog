// Imports
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

// Middleware
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// Export
module.exports = router;
