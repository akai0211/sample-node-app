const express = require('express');
const app = express();
const my_name = process.env.JK_NAME

app.get('/', (req, res) => {
    res.status(200).send({ 'My name is ': + my_name });
});

app.get('/health', (req, res) => {
   res.status(200).send('OK');
});

app.listen(3000, _ => console.log('Application is listening on port 3000'));

