const express = require("express");
const permissionsManager = require("../../controllers/permissionsManager");

const router = express.Router();

// Rotas para methods
router.get("/", permissionsManager.getResourceList);
router.get("/:id", permissionsManager.getResource);
router.post("/", permissionsManager.createResource);
router.put("/:id", permissionsManager.editResource);
router.delete("/:id", permissionsManager.deleteResource);

module.exports = router;