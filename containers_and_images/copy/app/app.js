const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('helo');
});

app.listen(port, () => {
    console.log('Online on: 3000');
});