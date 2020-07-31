const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

let token;

beforeAll((done) => {
    supertest(server)
      .post('/auth/login')
      .send({
        username: "test",
        email: "test@test.com",
        password: "abc123"
      })
      .end((err, res) => {
        token = res.body.token; 
        done();
      });
  });


beforeAll(async () => {
    await db('users').truncate()
    await db.migrate.latest()
    await db.seed.run()
})

    

afterAll(async () => {
    await db.destroy()

})


describe("project integration tests", () => {
    // it("get /project", async () => {
    //     const res = await supertest(server).get("/api/users/1/project")
    //     expect(res.statusCode).toBe(200)
    //     expect(res.type).toBe("application/json")
    // })

    // it("get /project/:id SUCCEED", async () => {
    //     const res = await supertest(server).get("/api/users/1/project").set('authorization', `Bearer ${token}`)
    //     expect(res.statusCode).toBe(200)
    //     expect(res.type).toBe("application/json")
        
    // })

    it("get /project/:id FAIL", async () => {
        const res = await supertest(server).get("/api/users/1/project")
        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")
    })

    it("post /project FAIL", async () => {
        const data = {
            name: "Test project",
            details: "this is the data for the test project",
            time: "317 years"
        }
        const res = await supertest(server).post("/api/users/1/project").send(data)
        expect(res.statusCode).toBe(401)
        //expect(res.type).toBe("application/json")
    })

    // it("delete /project/:id FAIL", async () => {
    //     const res = await supertest(server).delete("/project/50")
    //     expect(res.statusCode).toBe(401)
    //     expect(res.type).toBe("application/json")
    // })

    it("put /project/:id FAIL", async () => {
        const data = {
            name: "Test project",
            details: "this is the data for the test project",
            time: "317 years"
        }
        const res = await supertest(server).put("/api/users/1/project/100").send(data)
        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")
    })
})