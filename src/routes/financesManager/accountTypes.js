const express = require("express");
const financesManager = require("../../controllers/financesManager");

const router = express.Router();

// Rotas para AccountTypes
router.get("/", financesManager.getAccountTypeList);
router.get("/:id", financesManager.getAccountType);
router.post("/", financesManager.createAccountType);
router.put("/:id", financesManager.editAccountType);
router.delete("/:id", financesManager.deleteAccountType);

module.exports = router;