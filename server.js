const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
}))
require('./db');
const donutsController = require('./controllers/donutsController');
app.use(morgan('short'))
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.get('/', (req, res)=>{
    res.send("welcome to donuts app");
})

app.use('/api/v1/donuts', donutsController);

const port = 9000;
app.listen(port, ()=>{
    console.log("SERVER IS RUNNING")
})