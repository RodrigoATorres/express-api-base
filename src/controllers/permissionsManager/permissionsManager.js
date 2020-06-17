const controllerHelpers = require("../../helpers/controllerHelpers");
const {Permission} = require("../../models/permission");

// Funções de controle de permissions
exports.createPermission = controllerHelpers.genCreateFunc(Permission, ["role", "resource", "method"]);
exports.getPermission = controllerHelpers.genGetFunc(Permission, ["role", "resource", "method"]);
exports.getPermissionList = controllerHelpers.genGetListFunc(
    Permission,
    ["role", "resource", "method"],
    [
        { path: "role", select: "name" },
        { path: "method", select: "name" },
        { path: "resource", select: "route" },
    ]
);
exports.deletePermission = controllerHelpers.genDeleteFunc(Permission);
exports.editPermission = controllerHelpers.genEditFunc(Permission);