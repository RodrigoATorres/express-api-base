const controllerHelpers = require("../../helpers/controllerHelpers");
const {Role} = require("../../models/permission");

// Funções de controle de roles
exports.createRole = controllerHelpers.genCreateFunc(Role, ["name", "description"]);
exports.getRole = controllerHelpers.genGetFunc(Role, ["name", "description"]);
exports.getRoleList = controllerHelpers.genGetListFunc(Role, ["name", "description"]);
exports.deleteRole = controllerHelpers.genDeleteFunc(Role);
exports.editRole = controllerHelpers.genEditFunc(Role);