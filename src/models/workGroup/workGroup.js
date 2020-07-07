const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Schema = mongoose.Schema;

const workGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    memberRoles:[{
        user:{
            type: ObjectId,
            ref: 'User'
        },
        roles:[{
            type: ObjectId,
            ref: 'Role'
        }]        
    }],

    themePalette:{
        type: mongoose.Mixed
    }

});

module.exports = mongoose.model("WorkGroup", workGroupSchema);