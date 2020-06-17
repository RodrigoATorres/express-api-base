const router = require('express').Router();
const isAuth = require("../../middlewares/is-auth");

router.use('/', isAuth, require('./workGroupsManager'));

module.exports = router;

