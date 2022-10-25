const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/course.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/course-items', (req, res) => {
    res.send(course);
});

// app.get('/category/:id', (req, res) => {
//     const id = req.params.id;
//     if (id === '08') {
//         req.send(news);
//     }
//     else {
//         const category_news = news.filter(n => n.category_id === id);
//         res.send(category_news);
//     }
// });

app.get('/course-details', (req, res) => {
    res.send(courses);
})

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n.id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('World News Server Running on port port', port);
})