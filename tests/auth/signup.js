const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:5000");

describe("Auth - Cadastro de usuários", function () {
    auth = {};

    it("Não deve permitir registro de usuários com emails já registrados", function (done) {
        api.put("/auth/signup")
            .send({
                email: "ratorres7@gmail.com",
                password: "testesenha",
                name: "Rodrigo Amorim Torres",
            })
            .set("Accept", "application/x-www-form-urlencoded")
            .expect("Content-Type", /json/)
            .expect(422, done);
    });

    it("Não deve aceitar senhas curtas", function (done) {
        api.put("/auth/signup")
            .send({
                email: "example@gmail.com",
                password: "tt",
                name: "Rodrigo Amorim Torres",
            })
            .set("Accept", "application/x-www-form-urlencoded")
            .expect("Content-Type", /json/)
            .expect(422, done);
    });

    it("Não deve aceitar requisições sem nome", function (done) {
        api.put("/auth/signup")
            .send({
                email: "example@gmail.com",
                password: "tt",
            })
            .set("Accept", "application/x-www-form-urlencoded")
            .expect("Content-Type", /json/)
            .expect(422, done);
    });

    it("Não deve aceitar requisições sem senha", function (done) {
        api.put("/auth/signup")
            .send({
                email: "example@gmail.com",
                name: "Rodrigo Amorim Torres",
            })
            .set("Accept", "application/x-www-form-urlencoded")
            .expect("Content-Type", /json/)
            .expect(422, done);
    });

    it("Não deve aceitar requisições sem email", function (done) {
        api.put("/auth/signup")
            .send({
                password: "tt",
                name: "Rodrigo Amorim Torres",
            })
            .set("Accept", "application/x-www-form-urlencoded")
            .expect("Content-Type", /json/)
            .expect(422, done);
    });

    it("Deve aceitar apenas emails válidos", function (done) {
        api.put("/auth/signup")
            .send({
                email: "example@gmail",
                password: "tt",
                name: "Rodrigo Amorim Torres",
            })
            .set("Accept", "application/x-www-form-urlencoded")
            .expect("Content-Type", /json/)
            .expect(422, done);
    });

    it("Deve aceitar apenas emails válidos", function (done) {
        api.put("/auth/signup")
            .send({
                email: "@gmail.com",
                password: "tt",
                name: "Rodrigo Amorim Torres",
            })
            .set("Accept", "application/x-www-form-urlencoded")
            .expect("Content-Type", /json/)
            .expect(422, done);
    });

    it("Deve aceitar apenas emails válidos", function (done) {
        api.put("/auth/signup")
            .send({
                email: "example.com",
                password: "tt",
                name: "Rodrigo Amorim Torres",
            })
            .set("Accept", "application/x-www-form-urlencoded")
            .expect("Content-Type", /json/)
            .expect(422, done);
    });

    it("Deve aceitar apenas emails válidos", function (done) {
        api.put("/auth/signup")
            .send({
                email: "example",
                password: "tt",
                name: "Rodrigo Amorim Torres",
            })
            .set("Accept", "application/x-www-form-urlencoded")
            .expect("Content-Type", /json/)
            .expect(422, done);
    });
});
