const controllerHelpers = require("../../helpers/controllerHelpers");
const {Method} = require("../../models/permission");

// Funções de controle de method
exports.createMethod = controllerHelpers.genCreateFunc(Method, ["route", "name", "description"]);
exports.getMethod = controllerHelpers.genGetFunc(Method, ["route", "name", "description"]);
exports.getMethodList = controllerHelpers.genGetListFunc(Method, ["route", "name", "description"]);
exports.deleteMethod = controllerHelpers.genDeleteFunc(Method);
exports.editMethod = controllerHelpers.genEditFunc(Method);
