const express = require("express");
const permissionsManager = require("../../controllers/permissionsManager");

const router = express.Router();

// Rotas para methods
router.get("/", permissionsManager.getMethodList);
router.get("/:id", permissionsManager.getMethod);
router.post("/", permissionsManager.createMethod);
router.put("/:id", permissionsManager.editMethod);
router.delete("/:id", permissionsManager.deleteMethod);

module.exports = router;