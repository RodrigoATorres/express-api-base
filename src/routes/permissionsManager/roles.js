const express = require("express");
const permissionsManager = require("../../controllers/permissionsManager");

const router = express.Router();

// Rotas para methods
router.get("/", permissionsManager.getRoleList);
router.get("/:id", permissionsManager.getRole);
router.post("/", permissionsManager.createRole);
router.put("/:id", permissionsManager.editRole);
router.delete("/:id", permissionsManager.deleteRole);

module.exports = router;