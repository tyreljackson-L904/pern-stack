const express = require("express")
const app = express()
const cors = require('cors')
const pool = require("./db")

const PORT = 5002 || process.env.PORT

//middleware
app.use(cors())
app.use(express.json())

//Routes

//create a todo
app.post("/todos", async (req, res) => {
    try {
        
        const { description } = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);

        res.json(newTodo)

    } catch (error) {
        console.log(error.message)
    }
})

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`)
})