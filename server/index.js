const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db')

//middleware
app.use(cors());
//getting request from user
app.use(express.json());

//ROUTES

//create a todo
app.post('/todos', async(req,res) =>{
    try {
        const description = req.body;
        const newtodo = await pool.query("INSERT INTO todo (description) VALUES($1)",
        [description]);
        res.json(newtodo);
        
    } catch (error) {
        console.log(error.message);
    }

});


//get all todo


//get a todo


//Update a todo


//Delete a todo
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("server has started on port", PORT);
})