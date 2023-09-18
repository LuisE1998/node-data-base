import pkg from 'pg';
const { Client } = pkg;
import express from 'express';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'colegio',
    password: '12345',
    port: 5432
});

const app = express();

app.get('/', async (_req, res) => {
    await client.connect();
    const result = await client.query('Select * from school', []);
    await client.end();
    return res.send(result.rows); 
});    

app.listen(8000, () => console.log("listeningg...."));
