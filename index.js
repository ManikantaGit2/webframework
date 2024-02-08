const express = require('express')
const app = express()
const PORT = 7010;

app.use(express.static(__dirname));

app.get("/form",(req,res)=> {
    res.sendFile(__dirname + "/form/form.html");
});

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
});