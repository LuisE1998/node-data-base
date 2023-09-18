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

app.use(express.urlencoded({ extended: true }));
app.post('/createSchool', async (req, res) => {
    const schoolName = req.body.school_name;
    const schoolEmail = req.body.school_email;
    await client.connect();
    const result = await client.query('Insert into school (school_name, school_email) values ($1, $2)', [schoolName, schoolEmail]);
    await client.end();
    return res.send(result.rows); 
});   

app.listen(8000, () => console.log("listeningg...."));
