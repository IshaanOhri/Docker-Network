const express = require('express');
const fetch = require('node-fetch');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {

    fetch('http://container-b:4000/')
        .then(res => res.json())
        .then(body => {
            res.send({
                success: true,
                message: body,
                timestamp: moment().format()
            });
        })
        .catch((err) => {
            console.log(err);
            res.send({
                success: false,
                message: 'Network with Server 2 not formed. Try forming a network.',
                timestamp: moment().format()
            });
        })
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server 1 listening on port: ${PORT}`);
})