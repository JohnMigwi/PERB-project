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
app.post('/todo', async(req,res) =>{
    try {
        const {description} = req.body
        const newTodo = await pool.query("INSERT INTO todo (description)  VALUES ($1) RETURNING * ", [description]);
        res.json(newTodo.rows[0])
    } catch (error) {
        console.log(error.message);
    }

});

//get all todo
app.get('/todos', async(req,res) =>{
    try {
        const allTodos = await pool.query ("SELECT * FROM todo");
        res.json(allTodos.rows)
        
    } catch (error) {
        console.log(error.message);
        
    }
    
})

//get a todo
app.get('/todo/:id', async(req,res) =>{
    try {  
    const {id} = (req.params);
    const gottentodo = await pool.query ("SELECT * FROM todo WHERE todo_id = $1",[id] );
    res.json(gottentodo.rows[0]);
        
    } catch (error) {
        console.log(error.message);
        
    }
    
})

//Update a todo

app.put('/todo/:id', async(req,res)=>{
    try {

        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo was updated");
    } catch (error) {
        console.log(error.message);
    }
})
//Delete a todo
app.delete('/todo/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const deletetodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 ", [id]);
        res.json("Todo was deletd");
    } catch (error) {
        console.log(error.message);  
    }
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("server has started on port", PORT);
})