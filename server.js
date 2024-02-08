const express = require('express')
const app = express()
const PORT = 7060;

const bodyParser = require('body-parser')

app.use(express.static(__dirname));

app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/form/form.html");
});

app.use(bodyParser.urlencoded({extended:false}))

app.get('/submit', function(req,res){
    console.log("Data Saved.....")
});

const {Client} = require('pg')

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Mani@1234",
    database:"Todo_app_db"
});


app.post("/",(req,res)=>{
    const {f_name,mail,phone} = req.body
    client.connect()
    client.query('INSERT INTO form VALUES($1,$2,$3)',[f_name,mail,phone],(err,res)=>{

        if(!err){
            console.log(res.rows);
        } else{
            console.log(err.message);
        }
        client.end()
    })
    res.sendFile(__dirname + "/form/form.html");
})


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
});