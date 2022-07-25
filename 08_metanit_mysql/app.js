const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "posts",
  password: ""
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });


 connection.query("SELECT * FROM posts",
 function(err, results, fields) {
   console.log(err);
   console.log(results); // собственно данные
   //console.log(fields); // мета-данные полей 
});


 // закрытие подключения
 connection.end(function(err) {
    if (err) {
      return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
  });

 // https://metanit.com/web/nodejs/8.1.php
 // npm install --save mysql2
 // node app.js