const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const methodSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("Method", methodSchema);
