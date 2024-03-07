// import express
const express = require('express');
const userrouter = require('./routers/userrouter');
const productrouter = require('./routers/productrouter')
const utilROuter = require('./routers/utils')
const cors = require('cors')
// initialize express app

const app = express();

const port = 5000;


//middleware
app.use(cors(
    { origin: ['http://localhost:3000'] }
));

app.use(express.json());

app.use('/user', userrouter);
app.use('/product', productrouter);
app.use('/util', utilROuter);

app.use(express.static('./static/uploads'));

// app.get('/', (req, res) => {
//     res.send("Response from express");

// });

app.listen(port, () => { console.log('server started'); });
