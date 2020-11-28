const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");


const { expect } = chai;

chai.use(chaiHttp);

describe("GET Leagues", () => {
    it("should return an array of all the movies", (done) => {
        chai.request(app)
            .get("/leagues")
            .end((error, response) => {
                if(error) done(error);
                
                expect(response).to.have.status(200);
                expect(response).to.be.an("object")
                done();
            })
    })
})