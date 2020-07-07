const express = require("express");
const workGroupsManager = require("../../controllers/workGroupsManager");
const isAuth = require("../../middlewares/is-auth");

const router = express.Router();

// Rotas para methods
router.get("/", isAuth, workGroupsManager.getWorkGroupList);
router.get("/:id", isAuth, workGroupsManager.getWorkGroup);
router.post("/", isAuth, workGroupsManager.createWorkGroup);
router.put("/:id", isAuth, workGroupsManager.editWorkGroup);
router.delete("/:id", isAuth, workGroupsManager.deleteWorkGroup);
router.get("/theme/:id", workGroupsManager.getWorkGroupTheme);

module.exports = router;