const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Schema = mongoose.Schema;

const permissionSchema = new Schema({
    role: {
        type: ObjectId,
        ref: "Role",
        required: true,
    },

    resource: {
        type: ObjectId,
        ref: "Resource",
        required: true,
    },

    method: {
        type: ObjectId,
        ref: "Method",
        required: true,
    },
});

module.exports = mongoose.model("Permission", permissionSchema);
