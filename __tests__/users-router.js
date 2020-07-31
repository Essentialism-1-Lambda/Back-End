const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

let token;

beforeAll((done) => {

    supertest(server)
      .post('/api/login')
      .send({
        username: "vo",
        email: "vo@vo.com",
        password: "abc123"
      })
      .end((err, res) => {
        token = res.body.token; 
        done();
      });
 });


beforeAll(async () => {
    //await db('users').truncate()
    await db.migrate.latest()
    await db.seed.run()   
})


afterAll(async () => {
    await db.destroy()

})

describe("users integration tests", () => {

    // it("get /users SUCCEED", async () => {
    //     const res = await supertest(server).get("/api/users").set(token)
    //     expect(res.statusCode).toBe(200)
    //     expect(res.type).toBe("application/json")
    //     expect(res.body).toHaveLength(3)
    // })

    // it("get /users FAIL", async () => {
    //     const res = await supertest(server).get("/users")
    //     expect(res.statusCode).toBe(401)
    //     expect(res.type).toBe("application/json")
    // })

    it("get /users/:id FAIL", async () => {
        const res = await supertest(server).get("/api/users/1")
        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")
    })


    it("post /users FAIL", async () => {
        const data = {
            email: "vo@vo.com",
            username: "vospader",
            password: "abc123"
        }
        const res = await supertest(server).get("/api/users")
        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")
    })

    it("DELETE /users/:id FAIL", async () => {
        const res = await supertest(server).delete("/api/users/100")
        expect(res.statusCode).toBe(401)
        expect(res.type).toBe("application/json")    
    })
})