const express = require('express');
const app = express();
const port = 3000;

//Link CSS========================================
app.use(express.static(__dirname + '/public'));

//MIDDLEWARE=======================================
//Routes
//I
app.get('/home', (req, res) => {
    res.render('index.ejs')
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