const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

beforeAll(async () => {
    //await db('users').truncate()
    await db.migrate.latest()
    await db.seed.run()
  })
afterAll(async () => {
    await db.destroy()

})

// describe("api integration tests", () => {
//     it("POST /register SHOULD SUCCEED", async () =>{
//         const data = {
//             email: "test1@test.com",
//             username: "test1",
//             password: "abc123"
//        }
//        const res = await supertest(server).post("/api/register").send(data)
//        expect(res.statusCode).toBe(201)
//        expect(res.type).toBe("application/json")
//        expect(res.body.username).toBe("test")
//     })

    // it("POST /register SHOULD FAIL", async () =>{
    //     const data = {
    //     email: "test@test.com",
    //     username: "test",
    //     password: "abc123"
    //    }
    //    const res = await supertest(server).post("/api/register").send(data)
    //    expect(res.statusCode).toBe(409)
       
    // })

    // it("POST /login SHOULD SUCCEED", async () => {
    //     const data = {email: "test1@test.com", password: "abc123"}
    //     const res = await supertest(server).post("/api/login").send(data)
    //     expect(res.statusCode).toBe(200)
    //     expect(res.type).toBe("application/json")
    // })

    // it("POST /login SHOULD FAIL", async () => {
    //     const data = {email: "test1@test.com", password: "abc"}
    //     const res = await supertest(server).post("/api/login").send(data)
    //     expect(res.statusCode).toBe(401)
    //     expect(res.type).toBe("application/json")
    // })

// })