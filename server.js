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

// Setting up nodemailer
const nodemailer = require('nodemailer');
var transport = {
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Nodemailer connected');
  }
});

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

// Sending "New" category to client
app.get('/api/outputNew', function(request,response) {
    pool.connect((err, client, done) => {
        if (err) throw err
        client.query(`SELECT * FROM "Products" ORDER BY "date" DESC`, (err, res) => {
          done()
          if (err) {
            console.log(err.stack)
          } else {
            response.send(res.rows);
          }
        })
      }) 
});

// Sending "Men" category to client
app.get('/api/outputMen', function(request,response) {
  pool.connect((err, client, done) => {
      if (err) throw err
      client.query(`SELECT * FROM "Products" WHERE "gender" = 'Мужской'`, (err, res) => {
        done()
        if (err) {
          console.log(err.stack)
        } else {
          response.send(res.rows);
        }
      })
    }) 
});

// Sending "Women" category to client
app.get('/api/outputWomen', function(request,response) {
  pool.connect((err, client, done) => {
      if (err) throw err
      client.query(`SELECT * FROM "Products" WHERE "gender" = 'Женский'`, (err, res) => {
        done()
        if (err) {
          console.log(err.stack)
        } else {
          response.send(res.rows);
        }
      })
    }) 
});

// Sending "Sale" category to client
app.get('/api/outputSale', function(request,response) {
  pool.connect((err, client, done) => {
      if (err) throw err
      client.query(`SELECT * FROM "Products" WHERE "onSale"=true`, (err, res) => {
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
        xxl: request.body.xxl || 0,
        onSale: request.body.onSale || false
    }
    pool.connect((err, client, done) => {
        if (err) throw err
        client.query(`INSERT INTO "Products" VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`,[product.code, date, product.name, product.category,
            product.image, product.gender, product.description, product.country, product.material, product.xs, product.s, product.m, 
            product.l, product.xl, product.xxl, product.price, product.onSale], (err) => {
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
        client.query(`UPDATE "Products" SET "${req.body.param}" = $1 WHERE code = $2`,[req.body.newValue, req.body.code], (err) => {
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

// Adding to a cart database
app.post('/api/addToCartDb', function(request,response) {
  // Getting the values
  var userId, name, image, price, size, code;
  userId = request.body.data.userId;
  size = request.body.data.size;
  request.body.data.list.filter(item => {
    name = item.name
    image = item.image
    price = item.productprice
    code = item.code
  })
  console.log(code);

  // Making queries
  pool.connect((err, client, done) => {
    if (err) throw err
    client.query(`SELECT * FROM "Cart" WHERE "userId" = $1`, [userId] , (err, res) => {
      done()
      if (err) {
        console.log(err.stack)
      } else {
        // Check if a table is empty
        if (res.rows.length > 0) {
          let hasSize = false;
          res.rows.map((item) => {
            if (item.size === size && item.code === code) {
              hasSize = true;
            }
          })
        // If an item with the same size is already in cart, increase quantity by 1 
        if (hasSize) {
          pool.connect((err, client, done) => {
            if (err) throw err
            client.query(`UPDATE "Cart" SET quantity = quantity + 1 WHERE "userId" = $1 AND "size" = $2 AND "code" = $3`, [userId, size, code] , (err, res) => {
              done()
              if (err) {
                console.log(err.stack)
              } else {
                console.log("There is already an item with this size, increased quantity by 1.");
              }
            })
          })
        // Else insert a new row
         } else {
            pool.connect((err, client, done) => {
              if (err) throw err
              client.query(`INSERT INTO "Cart"("name","image","quantity","price","size","userId","code") VALUES($1,$2,$3,$4,$5,$6,$7)`, [name,image,1,price,size,userId,code] , (err, res) => {
                done()
                if (err) {
                  console.log(err.stack)
                } else {
                  console.log("Inserting a new item.");
                }
              })
            }) 
          }
        }
        // Table is empty => insert a new row
        else {
              pool.connect((err, client, done) => {
              if (err) throw err
              client.query(`INSERT INTO "Cart"("name","image","quantity","price","size","userId","code") VALUES($1,$2,$3,$4,$5,$6,$7)`, [name,image,1,price,size,userId,code] , (err, res) => {
                done()
                if (err) {
                  console.log(err.stack)
                } else {
                  console.log("Inserting a new item.");
                }
              })
            }) 
          }
      }
    })
  })
});

// Getting items from database in cart
app.post('/api/getCartItems', function(request,response) {
  // Getting the values
  console.log(request.body);
  var userId;
  userId = request.body.data;
  console.log("user id = " + userId);

  // Making queries
  pool.connect((err, client, done) => {
    if (err) throw err
    client.query(`SELECT * FROM "Cart" WHERE "userId" = $1 ORDER BY "name"`, [userId] , (err, res) => {
      done()
      if (err) {
        console.log(err.stack)
      } else {
        console.log("Items sent to cart");
        response.send(res.rows);
        }
    })
  })
});

// Changing the quantity
app.post('/api/changeItemQty', function(request,response) {
  pool.connect((err, client, done) => {
    if (err) throw err
    client.query(`UPDATE "Cart" SET quantity = $1 WHERE "id" = $2`, [request.body.data.quantity, request.body.data.id] , (err, res) => {
      done()
      if (err) {
        console.log(err.stack)
      } else {
        console.log("Quantity updated");
        response.send(res.rows);
        }
    })
  })
});

// Deleting an item from cart
app.post('/api/cartItemDelete', function(request,response) {
  pool.connect((err, client, done) => {
    if (err) throw err
    client.query(`DELETE FROM "Cart" WHERE "id" = $1`, [request.body.data.id] , (err, res) => {
      done()
      if (err) {
        console.log(err.stack)
      } else {
        console.log("Item deleted");
        response.send(res.rows);
        }
    })
  })
});

// Completing the purchase
app.post('/api/doCheckout', urlencodedParser, async function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var goods = "";

  pool.connect((err, client, done) => {
    if (err) {
      response.redirect('/home')
      throw err
    }
    // Getting all user's products
    client.query(`SELECT * FROM "Cart" WHERE "userId" = $1 ORDER BY "name"`, [request.body.userId] , (err, res) => {
      done()
      if (err) {
        console.log(err.stack)
        response.redirect('/home')
      } else {
        console.log("Got cart items")
        // Getting the values
          for (let i = 0; i < res.rows.length; i++) {
            goods += i+1 + ". Артикул: " + res.rows[i].code + ", Название: " + res.rows[i].name + ", Размер: " + res.rows[i].size + ", Количество: " + res.rows[i].quantity + "; ";
          }
          let purchase = {
            userId: request.body.userId || null,
            status: "Не подтвержден",
            products: goods || null,
            deliveryType: request.body.deliveryType || null,
            firstName: request.body.firstName || null,
            lastName: request.body.lastName || null,
            phoneNumber: request.body.phoneNumber || null,
            email: request.body.email || null,
            city: request.body.city || null,
            address: request.body.address || null,
            building: request.body.building || null,
            housing: request.body.housing || null,
            apartment: request.body.apartment || null,
            totalSum: request.body.totalSum || null,
            dateOfPurchase: date,
            dateOfDelivery: null
          }
          // Inserting purchase information to a database
          pool.connect((err, client, done) => {
            if (err) {
              response.redirect('/home')
              throw err
            }
            client.query(`INSERT INTO "Purchases" VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,[purchase.userId, purchase.status, purchase.products, 
              purchase.deliveryType, purchase.firstName, purchase.lastName, purchase.phoneNumber, purchase.email, purchase.address, purchase.building,
              purchase.housing, purchase.apartment, purchase.totalSum, purchase.dateOfPurchase, purchase.dateOfDelivery, purchase.city], (err) => {
                done()
                if (err) {
                  console.log(err.stack)
                  response.redirect('/home')
                } else {
                  console.log("Purchase successfully added to a database")
                  // Deleting user's cart
                  pool.connect((err, client, done) => {
                    if (err) throw err
                    client.query(`DELETE FROM "Cart" WHERE "userId" = $1`, [purchase.userId] , (err, res) => {
                      done()
                      if (err) {
                        console.log(err.stack)
                        response.redirect('/home')
                      } else {
                        console.log("Items deleted from cart");
                        response.redirect('/successful')
                        }
                    })
                  })
                } 
            })
          })
        }
    })
  })
});

// Sending purchases database to client
app.get('/api/outputPurchasesDB', function(request,response) {
  pool.connect((err, client, done) => {
      if (err) throw err
      client.query(`SELECT * FROM "Purchases" ORDER BY "id"`, (err, res) => {
        done()
        if (err) {
          console.log(err.stack)
        } else {
          response.send(res.rows);
        }
      })
    }) 
});

// Updating purchases
app.post('/api/updatePurchase', urlencodedParser, function (req, res) {
  if(!req.body) return res.sendStatus(400);
  console.log(req.body.param + " " + req.body.newValue + " " + req.body.code);
  if(req.body.param === "" || req.body.newValue === "" || req.body.code === "") {
      console.log("Not enough data");
      res.redirect('/admin/purchases');
      return;
  }
    pool.connect((err, client, done) => {
      if (err) throw err
      client.query(`UPDATE "Purchases" SET "${req.body.param}" = $1 WHERE "id" = $2`,[req.body.newValue, req.body.code], (err) => {
        done()
        if (err) {
          console.log(err.stack)
        }
      })
    }) 
  res.redirect('/admin/purchases');
});

// Deleting purchases
app.post('/api/deletePurchase', urlencodedParser, function (req, res) {
  if(!req.body) return res.sendStatus(400);
  if (req.body.id === "") {
      console.log("Not enough data");
      res.redirect('/admin/purchases');
      return;
  }
  pool.connect((err, client, done) => {
      if (err) throw err
      client.query(`DELETE FROM "Purchases" WHERE "id" = $1`,[req.body.id], (err) => {
        done()
        if (err) {
          console.log(err.stack)
        }
      })
    }) 
  res.redirect('/admin/purchases');
});

// Adding a subscription to Newsletter
app.post('/api/newsletterSub', urlencodedParser, function(request,response) {
  pool.connect((err, client, done) => {
    if (err) throw err
    client.query(`INSERT INTO "Newsletter" VALUES($1)`,[request.body.email], (err, res) => {
      done()
      if (err) {
        console.log(err.stack)
        response.redirect('/home')
      } else {
        response.redirect('/home')
        }
    })
  })
});

// Adding a promocode to user's cart
app.post('/api/addPromocode', urlencodedParser, function(request,response) {
  if (request.body.promocode === "secretplace1337") {
      pool.connect((err, client, done) => {
      if (err) throw err
      client.query(`UPDATE "Cart" SET "promocode" = 500 WHERE "userId" = $1`,[request.body.userId], (err, res) => {
        done()
        if (err) {
          console.log(err.stack)
          response.redirect('/cart')
        } else {
          response.redirect('/cart')
          }
      })
    })
  } else response.redirect('/cart')
});


// Sending email
app.post('/api/sendEmail', urlencodedParser, function(request,response) {
  const email = request.body.email
  var message = ''
  var subj = ''
  if (request.body.param === 'cancel') {
    message = 'Уважаемый покупатель, к сожалению ваш заказ был отменен.'
    subj = "Отмена заказа"
  } else if (request.body.param === 'submit') {
    message = 'Спасибо за покупку на сайте Versavia. Мы рады подтвердить оформление заказа. После отправки заказа со склада мы вышлем вам уведомление на ваш электронный адрес.'
    subj = "Подтверждение заказа"
  } else if (request.body.param === 'send') {
    message = 'Команда Versavia рада сообщить, что ваш заказ уже в пути. За час до доставки с вами свяжется курьер'
    subj = "Ваш заказ поступил в службу доставки"
  }

  var mail = {
    from: process.env.MAIL_USER,
    to: email,  
    subject: subj,
    html: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      response.redirect('/admin/purchases')
    } else {
      response.redirect('/admin/purchases')
    }
  })
});