const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');

app.use(routes);


app.listen(port, () => {
    console.log(`vår server lyssnar nu på http://127.0.0.1:${port}/`);

});