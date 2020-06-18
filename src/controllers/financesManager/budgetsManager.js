const controllerHelpers = require("../../helpers/controllerHelpers");
const {Budget} = require("../../models/finance");

const addFilter = (filter, req) => {
    filter.workGroup = req.workGroupId;
};

const addData = (data,req) => {
    data.workGroup = req.workGroupId;
};

// Funções de controle de Budget
exports.createBudget = controllerHelpers.genCreateFunc(Budget, ["name", "description"], addData);
exports.getBudget = controllerHelpers.genGetFunc(Budget, ["name", "description"],[],addFilter);
exports.getBudgetList = controllerHelpers.genGetListFunc(Budget, ["name", "description"],[],addFilter);
exports.deleteBudget = controllerHelpers.genDeleteFunc(Budget,addFilter);
exports.editBudget = controllerHelpers.genEditFunc(Budget,addFilter);
