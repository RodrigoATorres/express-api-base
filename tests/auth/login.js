const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:5000");

describe("Auth - Login", function () {
    it("Verificar se usuário está logado", function (done) {
        api.get("/auth/verify")
            .set("Authorization", "bearer " + auth.token)
            .expect(200, done);
    });

    it("Verificar se retorna corretamente para tokens expirados", function (done) {
        api.get("/auth/verify")
            .set(
                "Authorization",
                "bearer " +
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjkzZDU3M2IzLWIzYTEtNDM4Zi04NzY1LTRiNTc0ZThhYzc5NyIsImlhdCI6MTU4ODcwOTc0NywiZXhwIjoxNTg4NzEzMzQ3fQ.tqfQ0HBslNfDWago-O3PkoJAlOc0MOQbJwfiKVagSYA"
            )
            .expect(500, done);
    });

    it("Não deve aceitar verificações em token", function (done) {
        api.get("/auth/verify").expect(401, done);
    });
});
