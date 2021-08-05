var express = require("express");
var router = express.Router();
const db = require('../config/database')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');

crypto.randomBytes(64).toString('hex');
dotenv.config();
process.env.TOKEN_SECRET;

function generateAccessToken(name) {
    return jwt.sign(name, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }

router.get('/coffee', function(req,res){
    res.render('index');
});

router.post('/coffee', function(req, res, next) {
    inputData ={
        name: req.body.name,
        people: req.body.people,
        date: req.body.date,
        message: req.body.message,
    }

    const token = generateAccessToken({ name: req.body.name });
    res.json(token);

    var sql = 'INSERT INTO orders SET ?';
    db.query(sql, [inputData],function (err, data) { 
        if (err) {
            console.log(err)
        }
        console.log("User data is inserted successfully ");
    });
   res.redirect('/coffee');
  }); 

module.exports = router;