import router from './routes.js';
import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

//porta que está sendo usada
app.listen(3000, ()=>console.log("api rodando"))

https.createServer({
    cert: fs.readFileSync('src/ssl/code.crt'),
    key:fs.readFileSync('src/ssl/code.key')
}, app).listen(3001, ()=> console.log("rodando em https") );