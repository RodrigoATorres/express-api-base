const controllerHelpers = require("../../helpers/controllerHelpers");
const {TransactionType} = require("../../models/finance");

const addFilter = (filter, req) => {
    filter.workGroup = req.workGroupId;
};

const addData = (data,req) => {
    data.workGroup = req.workGroupId;
};

// Funções de controle de TransactionType
exports.createTransactionType = controllerHelpers.genCreateFunc(TransactionType, ["name", "description"],addData);
exports.getTransactionType = controllerHelpers.genGetFunc(TransactionType, ["name", "description"],[],addFilter);
exports.getTransactionTypeList = controllerHelpers.genGetListFunc(TransactionType, ["name", "description"],[],addFilter);
exports.deleteTransactionType = controllerHelpers.genDeleteFunc(TransactionType,addFilter);
exports.editTransactionType = controllerHelpers.genEditFunc(TransactionType,addFilter);
