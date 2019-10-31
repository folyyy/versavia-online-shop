const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}.`));
app.use(express.static('public'));
app.use(express.static('src'));
app.use(express.json({limit: '1mb'}));
