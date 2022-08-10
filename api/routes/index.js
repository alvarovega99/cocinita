var express = require('express')
const {
    getCount,
    incrementCount,
} = require('./counter');
const app = express();


app.get('/views', async function(req, res, next) {
    try {
        console.log("Session: ");
        const count = await getCount();
        res.send(count);
    } catch (error) {
        next(error);
    }
})

app.get('/views/increment', async function(req, res, next) {
    try {
        const count = await incrementCount();
        res.send(count);
    } catch (error) {
        next(error);
    }
})

module.exports = app;