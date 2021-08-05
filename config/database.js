const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: 'root@123',     
    database: 'coffee' 
  }); 
  connection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });
  module.exports = connection;