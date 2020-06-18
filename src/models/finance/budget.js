const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const budgetSchema = new Schema({

    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        default:''
    },
    workGroup: {
        type: Schema.Types.ObjectId,
        ref: 'WorkGroup',
        required: true
    },
});

module.exports = mongoose.model('Budget', budgetSchema);