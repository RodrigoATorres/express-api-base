const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountTypeSchema = new Schema({

    name: {
        type:String,
        required:true
    },
    isExternal:{
        type:Boolean,
        required:true
    },
    description: {
        type:String,
        default:''
    }
});

module.exports = mongoose.model('AccountType', accountTypeSchema);