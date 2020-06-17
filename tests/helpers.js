const mongoUnit = require("mongo-unit");
var json2mongo = require("json2mongo");
const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:5000");

const testData = require("./test_data.json");

beforeEach((done) => {
    mongoUnit.load(json2mongo(testData)).then(() => {
        api.post("/auth/login")
            .send({
                email: "ratorres7@gmail.com",
                password: "testesenha",
            })
            .expect(200)
            .end((err, res) => {
                auth.token = res.body.token;
                done();
            });
    });
});

afterEach(() => mongoUnit.drop());
