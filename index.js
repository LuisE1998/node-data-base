import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'colegio',
    password: '12345',
    port: 5432
})

const getSchools = async () =>{
    
    await client.connect();
    const res = await client.query('Select * from school', []);
    await client.end();
    return res; 
}

getSchools().then((result)=>{
    console.log("result: ", result.rows.map((value)=>value.school_name));
})