const express = require("express");
const permissionsManager = require("../../controllers/permissionsManager");

const router = express.Router();

// Rotas para methods
router.get("/", permissionsManager.getPermissionList);
router.get("/:id", permissionsManager.getPermission);
router.post("/", permissionsManager.createPermission);
router.put("/:id", permissionsManager.editPermission);
router.delete("/:id", permissionsManager.deletePermission);

module.exports = router;