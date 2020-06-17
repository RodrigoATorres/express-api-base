const { validationResult } = require('express-validator');
const WorkGroup = require("../../models/workGroup");

module.exports = async (req, res, next) => {
    try {
        const roles = {isAdmin: req.user.isAdmin}
        try {
            const user_roles = await WorkGroup
            .findOne({'_id': req.workGroupId}, {'memberRoles': { $elemMatch: {user:req.user}}})
            .populate('memberRoles.roles','-_id name')
            roles['workgroup'] = user_roles.memberRoles[0].roles.map((elm)=>elm['name']);
        }
        catch{
            roles['workgroup'] = [];
        }
        res.status(200).json(roles)

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            next(err);
        }
    }
    next();
};
