const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session =  require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)

const restrict = require("../middleware/restrict");
const usersRouter = require("../users/users-router");
const authRouter = require('../auth/auth-router.js');
const dbConfig = require("../database/dbConfig")
const valuesRouter =require("../users/values-router")
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session({
    name:"token",
    resave:false,
    saveUninitialized:false,
    secret: process.env.COOKIE_SECRET || "secret",
    cookie: {
        httpOnly: true
    },
    store: new KnexSessionStore({
        knex: dbConfig,
        createTable: true
    })
}))

server.use('/api', authRouter);
server.use("/api/users", restrict(), usersRouter);
server.use("/api/values", valuesRouter)
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "ERROR ERROR"
    })
})



module.exports = server;