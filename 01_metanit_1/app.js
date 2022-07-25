// const http = require("http");
// http.createServer(function(request,response){
     
//     response.end("Hello NodeJS!");
     
// }).listen(3000, "127.0.0.1",function(){
//     console.log("Сервер начал прослушивание запросов на порту 3000");
// });


// https://metanit.com/web/nodejs/2.1.php


const os = require("os");
const greeting = require("./greeting");
 
// получим имя текущего пользователя
let userName = os.userInfo().username;
 
 
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));


// https://metanit.com/web/nodejs/2.1.php
const User = require("./user.js"); 
let eugene = new User("Eugene", 32);
eugene.sayHi();



const welcome = require("./welcome");
welcome.getMorningMessage();
welcome.getEveningMessage();