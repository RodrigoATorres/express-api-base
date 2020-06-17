const router = require('express').Router();
const isAuth = require("../../middlewares/is-auth");

router.use('/methods', isAuth, require('./methods'));
router.use('/permissions', isAuth, require('./permissions'));
router.use('/resources', isAuth, require('./resources'));
router.use('/roles', isAuth, require('./roles'));
router.use('/getmyroles', isAuth, require('./getMyRoles'));

module.exports = router;