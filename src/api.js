const mongoUnit = require("mongo-unit");
const glob = require("glob");
const path = require("path");
var fs = require("fs");
var json2mongo = require("json2mongo");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const permissionManagerRoutes = require("./routes/permissionsManager");
const workGroupManagerRoutes = require('./routes/workGroupsManager');
const financeManagerRoutes = require('./routes/financesManager');
const developmentRoutes = require('./routes/development')
// const userRoutes = require("./routes/users");

const saveWorkGroup = require("./middlewares/saveWorkGroup")
const securityMiddleware = require("./middlewares/securtiy");
const loggerMiddleware = require("./middlewares/logger");
const exceptionHandler = require("./middlewares/exceptionHandler");


const roleRoutes = require('./routes/permissionsManager/roles')

startExpress = (cfg) => {

    const app = express();
    app.use(loggerMiddleware(cfg.env === 'development'));
    app.use(bodyParser.json());
    app.use(securityMiddleware);

    app.use("/auth", authRoutes);
    app.use("/permissionsmanager", saveWorkGroup, permissionManagerRoutes);
    app.use("/roles", saveWorkGroup, roleRoutes);
    app.use("/financesmanager", saveWorkGroup, financeManagerRoutes);
    app.use("/workgroups", workGroupManagerRoutes);
    if (cfg.env === 'development'){
        app.use("/development", developmentRoutes);
    }
    // app.use("/users", userRoutes);

    app.use(exceptionHandler);

    console.log(cfg.dbUrl);

    mongoose
        .connect(cfg.dbUrl, { ssl: cfg.dbSSL,  useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
            app.listen(cfg.listenPort||5000, cfg.listenAddress||"localhost");
        })
        .catch((err) => console.log(err));
};


startMemoryDb = async () => {
    var ps = require('ps-node');

    // A simple pid lookup
    ps.lookup({
        command: 'mongodb-memory-server',
        }, function(err, resultList ) {
        if (err) {
            throw new Error( err );
        }
    
        resultList.forEach(function( process ){
            if( process ){
                ps.kill( process.pid, function( err ) {
                    if (err) {
                        throw new Error( err );
                    }
                    else {
                        console.log( 'Process %s has been killed!', process.pid, );
                    }
                });
            }
        });
    });

    await new Promise(r => setTimeout(r, 1000));
    var test_data = {};
    files = glob.sync("./tests/__test_data/*.json");
    for (let file of files) {
        test_data[path.parse(file).name] = JSON.parse(fs.readFileSync(file));
    }
    fs.writeFileSync("./tests/test_data.json", JSON.stringify(test_data));

    testMongoUrl = await mongoUnit.start();
    var testData = require("../tests/test_data.json");
    mongoUnit.load(json2mongo(testData));
    return testMongoUrl;
}


startApi = async (cfg ={}) => {
    if (!cfg.dbUrl){
        cfg.dbUrl = await startMemoryDb();
        cfg.dbSSL = false;
    }
    startExpress(cfg);
}

module.exports = startApi;