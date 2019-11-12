// Constants
const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();
const port = process.env.SERVERPORT;
const urlencodedParser = bodyParser.urlencoded({extended: false});
const { Pool } = require('pg')
const pool = new Pool({
    database: 'versavia-db',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    port: 5432,
    idleTimeoutMillis: 1000,
    connectionTimeoutMillis: 1000,
})

// Dependencies
app.use(express.static('public'));
app.use(express.static('src'));
app.use(express.json({limit: '1mb'}));

// Server start
app.listen(port, () => console.log(`Server started on port ${port}.`));

// DB connection and queries

// Output database
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// Sending database to client
app.get('/api/outputDB', function(request,response) {
    pool.connect((err, client, done) => {
        if (err) throw err
        client.query(`SELECT * FROM "Products"`, (err, res) => {
          done()
          if (err) {
            console.log(err.stack)
          } else {
            response.send(res.rows);
          }
        })
      }) 
});

// Adding new products
app.post('/api/addProduct', urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let product = {
        date: date,
        code: request.body.code || Math.round(Math.random() * 100000000000000).toString(),
        name: request.body.name || null,
        category: request.body.category || null,
        image: request.body.image || null,
        gender: request.body.gender || null,
        description: request.body.description || null,
        country: request.body.country || null,
        material: request.body.material || null,
        price: request.body.price || null,
        xs: request.body.xs || 0,
        s: request.body.s || 0,
        m: request.body.m || 0,
        l: request.body.l || 0,
        xl: request.body.xl || 0,
        xxl: request.body.xxl || 0 
    }
    pool.connect((err, client, done) => {
        if (err) throw err
        client.query(`INSERT INTO "Products" VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,[product.code, date, product.name, product.category,
            product.image, product.gender, product.description, product.country, product.material, product.xs, product.s, product.m, 
            product.l, product.xl, product.xxl, product.price], (err) => {
          done()
          if (err) {
            console.log(err.stack)
          }
        })
      }) 
    response.redirect('/admin');
});

// Updating products
app.post('/api/updateProduct', urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body.param + " " + req.body.newValue + " " + req.body.code);
    if(req.body.param === "" || req.body.newValue === "" || req.body.code === "") {
        console.log("Not enough data");
        res.redirect('/admin');
        return;
    }
      pool.connect((err, client, done) => {
        if (err) throw err
        client.query(`UPDATE "Products" SET ${req.body.param} = $1 WHERE code = $2`,[req.body.newValue, req.body.code], (err) => {
          done()
          if (err) {
            console.log(err.stack)
          }
        })
      }) 
    res.redirect('/admin');
});

// Deleting products
app.post('/api/deleteProduct', urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    if (req.body.code === "") {
        console.log("Not enough data");
        res.redirect('/admin');
        return;
    }
    pool.connect((err, client, done) => {
        if (err) throw err
        client.query(`DELETE FROM "Products" WHERE code = $1`,[req.body.code], (err) => {
          done()
          if (err) {
            console.log(err.stack)
          }
        })
      }) 
    res.redirect('/admin');
});

// Sending product based on code
app.post('/api/getProductById', function(request,response) {
    console.log(request.body);
    pool.connect((err, client, done) => {
        if (err) throw err
        client.query(`SELECT * FROM "Products" WHERE code = $1`, [request.body.data] , (err, res) => {
          done()
          if (err) {
            console.log(err.stack)
            response.send("error");
          } else {
            console.log(res.rows);
            if(res.rowCount === '0') {
            response.redirect('/admin');
            return;
            }
            else {
                response.send(res.rows);
            }
          }
        })
      }) 
});