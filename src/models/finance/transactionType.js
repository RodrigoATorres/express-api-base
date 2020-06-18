const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionTypeSchema = new Schema({

    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
    },
    WorkGroup: {
        type: Schema.Types.ObjectId,
        ref: 'WorkGroup',
        required: true
    },
});

module.exports = mongoose.model('TransactionType', transactionTypeSchema);