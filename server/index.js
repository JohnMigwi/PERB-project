const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());
//getting request from user
app.use(express.json());


const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("server has started on port", PORT);
})