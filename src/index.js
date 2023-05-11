require("dotenv").config()
const express = require('express');
const cors = require('cors');
require('./Database/db')

let port = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors()); 

app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
})