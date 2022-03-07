const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5001 || process.env.PORT
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Engine Started, Ready to take off!");
})

//create a user
app.post("/user", async (req, res) => {
    try {
        const { usertype, district, citycouncilrep, name, email, phonenumber, password } = req.body;
        const newUser = await pool.query("INSERT INTO communityuser (usertype, district, citycouncilrep, name, email, phonenumber, password) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [usertype, district, citycouncilrep, name, email, phonenumber, password])
    
        res.json(newUser)
    } catch (err) {
        console.error(err.message)
    }
})

//list all users

//get a user

//update a user

//delete a user

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})