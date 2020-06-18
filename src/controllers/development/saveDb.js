const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const glob = require("glob");
const path = require("path");
const fs = require('fs');

function toBuffer(ab) {
    var buf = Buffer.alloc(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}

module.exports = async (req, res, next) => {
    const collections = await mongoose.connection.db.listCollections().toArray();

    for (let collection of collections){
        let modelName = collection.name;

        fs.renameSync(`./tests/__test_data/${modelName}.json`,`./tests/__test_data/backup/${modelName}.json`);

        var spawn = require('child_process').spawn
        let bat = spawn('./tools/mongodb_tools/mongoexport',['-d','test','-h','127.0.0.1:27017','-o',`./tests/__test_data/${modelName}.json`,'--jsonArray','-c',modelName]);
        
        bat.stdout.on('data', (data) => {
            console.log(data.toString());
        });

        bat.stderr.on('data', (data) => {
            console.error(data.toString());
        });

        bat.on('exit', (code) => {
            if(code ==0){
                console.log(`${modelName} saved`);
            };
        }
        )
    }
    res.status(200).json({ msg: "Current database saved sucessfuly!" });
    next();
};