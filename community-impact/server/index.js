const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5001 || process.env.PORT

//middleware
app.use(cors())
app.use(express())

app.get("/", (req, res) => {
    res.send('status 200: ok')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})