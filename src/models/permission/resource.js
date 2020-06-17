const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    route: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("Resource", resourceSchema);
