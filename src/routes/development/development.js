const express = require("express");
const developmentController = require("../../controllers/development");

const router = express.Router();

// Rotas para methods
router.get("/savedb", developmentController.saveDb);

module.exports = router;