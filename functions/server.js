const serverless = require('serverless-http');
const express = require('express');
const app = express();

const userData = [
    {
        name: 'John Doe',
        age: 30,
        address: "123 Elm Street, Springfield"
    },
    {
        name: 'Jane Smith',
        age: 25,
        address: "456 Oak Avenue, Springfield"
    }
];

app.get('/', (req, res) => {
    res.json(userData);
});

app.get('/user', (req, res) => {
    res.json(userData);
});

module.exports.handler = serverless(app);
