const express = require("express");
const financesManager = require("../../controllers/financesManager");

const router = express.Router();

// Rotas para Transactions
router.get("/", financesManager.getTransactionList);
router.get("/:id", financesManager.getTransaction);
router.post("/", financesManager.createTransaction);
router.put("/:id", financesManager.editTransaction);
router.delete("/:id", financesManager.deleteTransaction);

module.exports = router;