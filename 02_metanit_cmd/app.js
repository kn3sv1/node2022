// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];
 
// console.log("nodePath: " + nodePath);
// console.log("appPath: " + appPath);
// console.log();
// console.log("name: " + name);
// console.log("age: " + age);

// // node app.js Tom 23



//https://metanit.com/web/nodejs/2.4.php
// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();
 
// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){
 
    response.end("Hello from Express!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);


console.log('Hello from Roma!!!!');

// node app.js