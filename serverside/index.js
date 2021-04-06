const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors')
const app = express();



app.use(cors());


mongoose.connect('mongodb://localhost:27017/shopinglist', { useUnifiedTopology: true , useNewUrlParser: true });

mongoose.connection.on('connected',() => {
    console.log('connected to MongoDB');
});

mongoose.connection.on('error',(err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send('Hello there!');
})

const PORT = 3000;
app.listen(PORT,() =>{ console.log('listening on port: ' +PORT)
});