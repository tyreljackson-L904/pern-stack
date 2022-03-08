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
app.post("/users", async (req, res) => {
    try {
        const { usertype, district, citycouncilrep, name, email, phonenumber, password } = req.body;
        const newUser = await pool.query("INSERT INTO communityuser (usertype, district, citycouncilrep, name, email, phonenumber, password) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [usertype, district, citycouncilrep, name, email, phonenumber, password])
    
        res.json(newUser)
    } catch (err) {
        console.error(err.message)
    }
})

//list all users
app.get("/users", async(req, res) => {
    try {
        const users = await pool.query("SELECT * FROM communityuser")
        res.json(users.rows)

    } catch (err) {
        console.error(err.message)
    }
})

//get a user
app.get("/users/:id", async(req, res) => {
    try {
        const {id} = req.params
        const getUser = await pool.query("SELECT * FROM communityuser WHERE id = $1", [id])
        console.log(res.json(getUser.rows[0]))
    } catch (err) {
        console.error(err.message)
    }
})

//update a user
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const {usertype, district, citycouncilrep, name, email, phonenumber, password} = req.body
        const updateUser = await pool.query(`UPDATE  SET communityuser WHERE id = $1`, [id, usertype, district, citycouncilrep, name, email, phonenumber, password])
        res.json(updateUser)
    } catch (err) {
        console.error(err.message)
    }
})

//delete a user
app.delete("/users/:id", async(req, res) => {
    try {
        const { id } = req.params
        await pool.query("DELETE FROM communityuser WHERE id = $1 RETURNING *", [id])
        res.json("todo was deleted")
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})