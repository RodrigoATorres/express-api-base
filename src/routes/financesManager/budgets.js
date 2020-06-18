const express = require("express");
const financesManager = require("../../controllers/financesManager");

const router = express.Router();

// Rotas para Budgets
router.get("/", financesManager.getBudgetList);
router.get("/:id", financesManager.getBudget);
router.post("/", financesManager.createBudget);
router.put("/:id", financesManager.editBudget);
router.delete("/:id", financesManager.deleteBudget);

module.exports = router;