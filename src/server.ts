import express from 'express';

const app = express();

let PORT = 3333 

app.get("/users")

app.listen(PORT, () => {console.log(`Ru