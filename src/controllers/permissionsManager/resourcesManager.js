const controllerHelpers = require("../../helpers/controllerHelpers");
const {Resource} = require("../../models/permission");

// Funções de controle de resources
exports.createResource = controllerHelpers.genCreateFunc(Resource, ["route", "name", "description"]);
exports.getResource = controllerHelpers.genGetFunc(Resource, ["route", "name", "description"]);
exports.getResourceList = controllerHelpers.genGetListFunc(Resource, ["route", "name", "description"]);
exports.deleteResource = controllerHelpers.genDeleteFunc(Resource);
exports.editResource = controllerHelpers.genEditFunc(Resource);
