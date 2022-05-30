const express = require('express');
const app = express();
const port = 3000;

//MIDDLEWARE=======================================
//Routes
//I
app.get('/', (req, res) => {
    res.send('Index')
})
//N
//D
//U
//C
//E
//S

//App Listen
app.listen(port, () => {
    console.log(`Listening on ${port} `)
})