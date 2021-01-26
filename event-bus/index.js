const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = []; // Stores all the events

/* Basic Event Bus Implementation */
app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event); // add the latest event

    // It is assumed that every call is succeeded. Missing error handling
    console.log('Event recieved: ', event);
    
    axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
    }); //Posts
    axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
    }); //Comments
    axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log(err.message);
    }); //Query Call
    axios.post('http://localhost:4003/events', event).catch((err) => {
        console.log(err.message);
    }); //Moderation Call

    res.send({ status: 'OK' });
})

// Returns all the events in the time
app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('listening in 4005')
})
