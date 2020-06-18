const express = require("express");
const financesManager = require("../../controllers/financesManager");

const router = express.Router();

// Rotas para Accounts
router.get("/", financesManager.getAccountList);
router.get("/:id", financesManager.getAccount);
router.post("/", financesManager.createAccount);
router.put("/:id", financesManager.editAccount);
router.delete("/:id", financesManager.deleteAccount);

module.exports = router;