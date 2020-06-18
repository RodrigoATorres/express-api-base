const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({

    ammount: {
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true,
    },
    accountIn:{
        type:Schema.Types.ObjectId,
        ref:'Account',
        required: true
    },
    accountOut:{
        type:Schema.Types.ObjectId,
        ref:'Account',
        required: true
    },
    budgetIn:{
        type:Schema.Types.ObjectId,
        ref:'Budget',
        required: true
    },
    budgetOut:{
        type:Schema.Types.ObjectId,
        ref:'Budget',
        required: true
    },
    type:{
        type:Schema.Types.ObjectId,
        ref:'TransactionType',
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: ''
    },
    workGroup: {
        type: Schema.Types.ObjectId,
        ref: 'workGroup',
        required: true
    },

});

module.exports = mongoose.model('Transaction', transactionSchema);