import express from 'express';
import bodyParser from 'body-parser'

import useRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json());

  app.use('/users', useRoutes)

app.get('/', (req, res) => {
    res.send('Hello there node');
});

app.get('*', (req, res) => {
    res.send('Sorry, you are trying to access a route that doesnt exist');
});

app.listen(5000, () => console.log('server is running'));