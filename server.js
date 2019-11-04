const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();
const port = process.env.PORT;


app.use(express.static('public'));
app.use(express.static('src'));
app.use(express.json({limit: '1mb'}));


app.get('/api/test', function (req, res) {
    return res.send('test');
});
   
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/getList', (req,res) => {
    var list = [
            {
                id: 1,
                category: 'Пальто',
                name: 'Пальто женское',
                image: '/instagram.png',
                price: '10000 рублей'
            },
            {
                id: 2,
                category: 'Пальто',
                name: 'Пальто мужское',
                image: '/instagram.png',
                price: '20000 рублей'
            },
            {
                id: 3,
                category: 'Пальто',
                name: 'Пальто женское',
                image: '/instagram.png',
                price: '10000 рублей'
            },
            {
                id: 4,
                category: 'Пальто',
                name: 'Пальто мужское',
                image: '/instagram.png',
                price: '20000 рублей'
            },
            {
                id: 5,
                category: 'Пальто',
                name: 'Пальто женское',
                image: '/instagram.png',
                price: '10000 рублей'
            },
            {
                id: 6,
                category: 'Пальто',
                name: 'Пальто мужское',
                image: '/instagram.png',
                price: '20000 рублей'
            },
            {
                id: 7,
                category: 'Пальто',
                name: 'Пальто женское',
                image: '/instagram.png',
                price: '10000 рублей'
            },
            {
                id: 8,
                category: 'Пальто',
                name: 'Пальто мужское',
                image: '/instagram.png',
                price: '20000 рублей'
            },
            {
                id: 9,
                category: 'Пальто',
                name: 'Пальто женское',
                image: '/instagram.png',
                price: '10000 рублей'
            },
            {
                id: 10,
                category: 'Пальто',
                name: 'Пальто мужское',
                image: '/instagram.png',
                price: '20000 рублей'
            },
    ]

    // var list = ["item1", "item2", "item3"];
    // res.send(list);
    res.json(list);
    console.log('Sent list of items:');
});


app.listen(port, () => console.log(`Server started on port ${port}.`));
