import 'reflect-metadata'
import express from 'express';
import './database';

const app = express();

let PORT = 3333 

app.get("/users", (req, res) => {

    return res.send('Hello Word!')
})

app.listen(PORT, () => {console.log(`Running in ${PORT}!`)})