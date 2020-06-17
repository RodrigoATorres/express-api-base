const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Schema = mongoose.Schema;

const roleAssignmentSchema = new Schema({
    user: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    role: {
        type: ObjectId,
        ref: "Role",
        required: true,
    },
    workGroup: {
        type: ObjectId,
        ref: "WorkGroup",
        required: true,
    },
});

module.exports = mongoose.model("RoleAssignment", roleAssignmentSchema);
