const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000
const cors = require('cors')

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/openai', require('./route/openAiRoutes'))

app.listen(port, ()=> {
    console.log(`Server listening to port ${port}`)
})

