const controllerHelpers = require("../../helpers/controllerHelpers");
const {Account} = require("../../models/finance");

const addFilter = (filter, req) => {
    filter.workGroup = req.workGroupId;
};

const addData = (data,req) => {
    data.workGroup = req.workGroupId;
    console.log('hey')
};

// Funções de controle de Account
exports.createAccount = controllerHelpers.genCreateFunc(Account, ["name", "description"],addData);
exports.getAccount = controllerHelpers.genGetFunc(Account, ["name", "description"],[],addFilter);
exports.getAccountList = controllerHelpers.genGetListFunc(Account, ["name", "description"],[],addFilter);
exports.deleteAccount = controllerHelpers.genDeleteFunc(Account,addFilter);
exports.editAccount = controllerHelpers.genEditFunc(Account,addFilter);
