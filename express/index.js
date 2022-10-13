const express = require('express')
const conectarDb = require('./config/db')
const cors = require('cors')

const app = express()
conectarDb()
app.use(cors())
app.use(express.json())


app.use('/api', require('./routes/routes'))

app.listen(4000, () => {
    console.log("proyecto ejecutandose en http://localhost:4000")
})