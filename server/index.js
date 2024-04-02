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
        const description = req.body;
        const newtodo = await pool.query("INSERT INTO todo (description) VALUES($1)",
        [description]);
        res.json(newtodo);
        
    } catch (error) {
        console.log(error.message);
    }

});

//get all todo
app.post('/todos', async(req, res)=>{
    try {
        const alltodo = await pool.query("SELECT * FROM todo");
       const response= req.json(alltodo.rows);
       console.log(response)
    } catch (error) {
        console.log(error.message);
    }
    
});


//get a todo
app.put('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FORM todo WHERE todo_id = $1", 
        [id]);
        if (todo.rows.length === 0) {
            return res.status(404).json({ message : "Todo not found"});
        }
        res.json(todo.row[id]);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server error");
    }
})


//Update a todo
try {
    
} catch (error) {
    
}


//Delete a todo
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("server has started on port", PORT);
})