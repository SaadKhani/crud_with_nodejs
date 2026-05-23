const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
require('dotenv').config()
require('./db');
const todoroutes = require('./ROUTES/TodoRoutes');
app.use(bodyparser.json())
app.use('/todos', todoroutes)

app.get('/', (req, res) => {
    res.json(
        {
            'message': "Hello API is working"
        }
    );
})

app.listen(PORT, () => {
    console.log(`server is running on the ${PORT}`)
})