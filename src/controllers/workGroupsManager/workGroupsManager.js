const controllerHelpers = require("../../helpers/controllerHelpers");
const WorkGroup = require("../../models/workGroup");

const addFilter = (filter, req) => {
    filter.memberRoles = { $elemMatch: {user:req.user}};
};

const addData = (data,req) => {
    data.owner = req.user;
    data.memberRoles = [
        {
            user:req.user,
            roles:[]
        }
    ]
};

// Funções de controle de WorkGroup
exports.createWorkGroup = controllerHelpers.genCreateFunc(WorkGroup,["name", "owner", "description"], addData);
exports.getWorkGroup = controllerHelpers.genGetFunc(
    WorkGroup,
    ["name", "owner", "description"],
    [
        { path: "owner", select: "name" },
    ],
    addFilter);
exports.getWorkGroupList = controllerHelpers.genGetListFunc(
    WorkGroup,
    ["name", "owner", "description"],
    [
        { path: "owner", select: "name" },
    ],
    addFilter);
exports.deleteWorkGroup = controllerHelpers.genDeleteFunc(WorkGroup, addFilter);
exports.editWorkGroup = controllerHelpers.genEditFunc(WorkGroup, addFilter);