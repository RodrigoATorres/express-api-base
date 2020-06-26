const controllerHelpers = require("../../helpers/controllerHelpers");
const {Transaction} = require("../../models/finance");

const addFilter = (filter, req) => {
    filter.workGroup = req.workGroupId;
};

const addData = (data,req) => {
    data.workGroup = req.workGroupId;
};

const populate = [
    { path: "accountIn", select: "name" },
    { path: "accountOut", select: "name" },
    { path: "budgetIn", select: "name" },
    { path: "budgetOut", select: "name" },
    { path: "type", select: "name" },
]

// Funções de controle de Transaction
exports.createTransaction = controllerHelpers.genCreateFunc(
    Transaction,
    ["ammount","date", "accountIn","accountOut","budgetIn", "budgetOut", "type", "description"],
    addData
    );
exports.getTransaction = controllerHelpers.genGetFunc(
    Transaction,
    ["ammount","date", "accountIn","accountOut","budgetIn", "budgetOut", "type", "description"],
    populate,
    addFilter
    );
exports.getTransactionList = controllerHelpers.genGetListFunc(
    Transaction,
    ["ammount","date", "accountIn","accountOut","budgetIn", "budgetOut", "type", "description"],
    populate,
    addFilter
    );
exports.deleteTransaction = controllerHelpers.genDeleteFunc(Transaction);
exports.editTransaction = controllerHelpers.genEditFunc(Transaction);
