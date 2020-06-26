const controllerHelpers = require("../../helpers/controllerHelpers");
const {AccountType} = require("../../models/finance");

// Funções de controle de AccountType
exports.createAccountType = controllerHelpers.genCreateFunc(AccountType, ["name", "description","type"]);
exports.getAccountType = controllerHelpers.genGetFunc(AccountType, ["name", "description","type"],[]);
exports.getAccountTypeList = controllerHelpers.genGetListFunc(AccountType,[]);
exports.deleteAccountType = controllerHelpers.genDeleteFunc(AccountType);
exports.editAccountType = controllerHelpers.genEditFunc(AccountType);
