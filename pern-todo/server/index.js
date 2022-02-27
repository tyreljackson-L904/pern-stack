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

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`)
})