const router = require('express').Router();
const isAuth = require("../../middlewares/is-auth");

router.use('/accounts', isAuth, require('./accounts'));
router.use('/budgets', isAuth, require('./budgets'));
router.use('/transactions', isAuth, require('./transactions'));
router.use('/transactions', isAuth, require('./transactions'));
router.use('/transactiontypes', isAuth, require('./transactionTypes'));

module.exports = router;