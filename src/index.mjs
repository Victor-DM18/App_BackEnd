import express from "express";
import knex from "knex";
import Redis from "ioredis";

import config from "./config";


const app = express();

const dtb = {
    redis: new Redis(config.redis),
    db: knex(config.knex),
};

app.use((req, next) => {
    req.dtb = dtb;

    next();
});