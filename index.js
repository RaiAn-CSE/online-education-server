const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('online Education API Running!');
});

app.get('/online-courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('online Education API Running on port port', port);
})