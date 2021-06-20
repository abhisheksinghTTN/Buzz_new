const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');


mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("Connected to Mongo");
})
mongoose.connection.on('error', (err) => {
    console.log("Connecting error", err);
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(3000, () => {
    console.log("Listen on port 3000!");
})