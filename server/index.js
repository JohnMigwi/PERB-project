const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');


const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server has started on port", PORT);
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a todo
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// Get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// Get a todo
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        if (todo.rows.length === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// Update a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *", [description, id]);
        if (updatedTodo.rows.length === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(updatedTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 RETURNING *", [id]);
        if (deletedTodo.rows.length === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json({ message: "Todo deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});
const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');
=======
//Update a todo
>>>>>>> parent of 95c00c0 (put)

// Middleware
=======
//middleware
>>>>>>> parent of 7fd31b3 (all endpoints test success ready to be used)
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
try {
    
} catch (error) {
    
}

<<<<<<< HEAD
// Start the server

