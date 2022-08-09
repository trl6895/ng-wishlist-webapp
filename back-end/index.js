//server entry point
import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send(`Hello World! Server running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});