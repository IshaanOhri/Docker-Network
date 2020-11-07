const express = require('express');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'This is a message from server 2 to server 1',
        timestamp: moment().format()
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server 2 listening on port: ${PORT}`);
})