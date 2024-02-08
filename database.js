const {Client} = require('pg')

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Mani@1234",
    database:"Todo_app_db"
})


client.connect()
client.query('SELECT * FROM public."Stud"',(err,res)=> {
    if(!err) {
        console.log(res.rows);
    } else{
        console.log(err.message);
    }
   
    client.end;
})

