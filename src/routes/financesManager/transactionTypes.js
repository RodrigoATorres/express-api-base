const express = require("express");
const financesManager = require("../../controllers/financesManager");

const router = express.Router();

// Rotas para TransactionTypes
router.get("/", financesManager.getTransactionTypeList);
router.get("/:id", financesManager.getTransactionType);
router.post("/", financesManager.createTransactionType);
router.put("/:id", financesManager.editTransactionType);
router.delete("/:id", financesManager.deleteTransactionType);

module.exports = router;