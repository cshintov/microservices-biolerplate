const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const patientRoutes = require('./routes/patient');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/patient', patientRoutes);

app.use((req, res, next) => {
    res.send(JSON.stringify({'error': 1, 'msg': "Page not found"}));
})

app.listen(8080);
