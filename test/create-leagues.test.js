const app = require("../app");
const request = require("supertest");
const { expect } = require("chai");

describe("POST League", () => {

    it("Should fail with missing credential", async() => {
        const response = await request(app)
            .post("/leagues")
            .send({})
            .expect(400)
    })
})