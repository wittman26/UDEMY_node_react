const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

/* Basic Event Bus Implementation */
app.post('/events', (req, res) => {
    const event = req.body;

    // It is assumed that every call is succeeded. Missing error handling
    console.log('Event recieved: ', event);
    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event); //Query Call
    axios.post('http://localhost:4003/events', event); //Moderation Call

    res.send({ status: 'OK'});
})

app.listen(4005, () => {
    console.log('listening in 4005')
})
