import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello there node');
});
app.listen(5000, () => console.log('server is running'));