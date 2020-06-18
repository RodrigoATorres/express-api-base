const prepare = require("mocha-prepare");
const mongoUnit = require("mongo-unit");
const glob = require("glob");
const path = require("path");
var fs = require("fs");

prepare((done) => {
    var test_data = {};
    files = glob.sync("./test/__test_data/*.json");
    for (let file of files) {
        test_data[path.parse(file).name] = JSON.parse(fs.readFileSync(file));
    }
    fs.writeFileSync("./tests/test_data.json", JSON.stringify(test_data));

    mongoUnit.start().then((testMongoUrl) => {
        process.env.MONGO_URL = testMongoUrl;
        app = require("../app");
        done();
    });
});
