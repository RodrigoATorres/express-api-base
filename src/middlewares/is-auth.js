const jwt = require("jsonwebtoken");
const User = require("../models/user");
const WorkGroup = require("../models/workGroup");
const {Permission, Resource, Method, Role} = require("../models/permission");
const url = require("url");

async function getPerms(user, workGroupId, resource_name, method_name) {
    if (user.isAdmin) {
        return true;
    };
    const userWGroles = await WorkGroup.findOne({'_id': workGroupId}, {'memberRoles': { $elemMatch: {user:user}}});
    const userRoles = ['loggedInUser'];
    if (userWGroles){
        userRoles.push( ...userWGroles.memberRoles[0].roles );
    }
    const resource = await Resource.findOne({ route: resource_name });
    const method = await Method.findOne({ name: method_name });
    return await Permission.findOne({role: { $in: userRoles }, resource: resource, method: method });
}

module.exports = async (req, res, next) => {
    if ('OPTIONS' === req.method) {
        return next()
    }

    try {
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            const error = new Error("Not authenticated.");
            error.statusCode = 401;
            throw error;
        }
        const token = authHeader.split(" ")[1];
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        } catch (err) {
            err.statusCode = err.name === "TokenExpiredError" ? 401 : 500;
            throw err;
        }
        if (!decodedToken) {
            const error = new Error("Not authenticated.");
            error.statusCode = 401;
            throw error;
        }

        let userId = decodedToken.userId;
        user = await User.findById(userId);

        if (!user) {
            const error = new Error("User not found.");
            error.statusCode = 404;
            throw error;
        } else {
            req.user = user;
            const resource = url.parse(req.originalUrl).pathname.toLowerCase().replace(/\/$/, "");
            const allow = await getPerms(user, req.workGroupId, resource, req.method);
            if (!allow) {
                const error = new Error("Access denied.");
                error.statusCode = 403;
                throw error;
            }
        }
        next();
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
