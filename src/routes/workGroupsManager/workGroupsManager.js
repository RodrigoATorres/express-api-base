const express = require("express");
const workGroupsManager = require("../../controllers/workGroupsManager");

const router = express.Router();

// Rotas para methods
router.get("/", workGroupsManager.getWorkGroupList);
router.get("/:id", workGroupsManager.getWorkGroup);
router.post("/", workGroupsManager.createWorkGroup);
router.put("/:id", workGroupsManager.editWorkGroup);
router.delete("/:id", workGroupsManager.deleteWorkGroup);

module.exports = router;