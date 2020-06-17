const express = require("express");
const {myRoles} = require("../../controllers/permissionsManager");

const router = express.Router();

// Rotas para methods
router.get("/", myRoles);

module.exports = router;