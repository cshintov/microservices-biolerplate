const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');



const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.options('*', cors());
const patientRoutes = require('./routes/patient');

// const corsOptions = {
//   origin: 'http://localhost:3003',
//   optionsSuccessStatus: 200 
// };
//
// app.use('/patient', corsOptions, patientRoutes);

app.use('/patient', patientRoutes);

app.use((req, res, next) => {
    res.send(JSON.stringify({'error': 1, 'msg': "Page not found"}));
})

app.listen(8080);
