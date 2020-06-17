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
// const userRoutes = require("./routes/users");

const saveWorkGroup = require("./middlewares/saveWorkGroup")
const securityMiddleware = require("./middlewares/securtiy");
const loggerMiddleware = require("./middlewares/logger");
const exceptionHandler = require("./middlewares/exceptionHandler");

startExpress = (cfg) => {

    const app = express();
    app.use(loggerMiddleware(cfg.env === 'development'));
    app.use(bodyParser.json());
    app.use(securityMiddleware);

    app.use("/auth", authRoutes);
    app.use("/:workGroupId/permissionsmanager", saveWorkGroup, permissionManagerRoutes);
    app.use("/permissionsmanager", saveWorkGroup, permissionManagerRoutes);
    app.use("/workgroups", workGroupManagerRoutes);
    // app.use("/users", userRoutes);

    app.use(exceptionHandler);

        mongoose
            .connect(cfg.dbUrl, { ssl: cfg.dbSSL })
            .then((result) => {
                app.listen(cfg.listenPort||5000, cfg.listenAddress||"localhost");
            })
            .catch((err) => console.log(err));
};


startMemoryDb = async () => {
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