const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:5000");
const jwt = require("jsonwebtoken");

describe("Auth - Verificação de token", function () {
    it("Verificar se usuário está logado", function (done) {
        api.get("/auth/verify")
            .set("Authorization", "bearer " + auth.token)
            .expect(200, done);
    });

    it("Retornar 401 se tokens vencidos forem usados", function (done) {
        let expired_token = jwt.sign(
            {
                email: "ratorres7@gmail.com",
                userId: "5ea76e5af1e4d9502677675f",
                iat: 1588090610,
                exp: 1588094220,
            },
            process.env.TOKEN_SECRET
        );

        api.get("/auth/verify")
            .set("Authorization", "bearer " + expired_token)
            .expect(401)
            .expect((res) => {
                res.body.should.have.property("message", "jwt expired");
            })
            .end(done);
    });

    it("Retornar 404 se tokens de usuários inexistentes forem usados", function (done) {
        let nouser_token = jwt.sign(
            {
                email: "ratorres7@gmail.com",
                userId: "ffffffffffffffffffffffff",
            },
            process.env.TOKEN_SECRET,
            { expiresIn: "1h" }
        );
        api.get("/auth/verify")
            .set("Authorization", "bearer " + nouser_token)
            .expect(404)
            .expect((res) => {
                res.body.should.have.property("message", "User not found.");
            })
            .end(done);
    });
});
