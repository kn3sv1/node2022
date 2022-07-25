// const fs = require("fs");
// let fileContent = fs.readFileSync("hello.txt", "utf8");
// console.log(fileContent);




//https://metanit.com/web/nodejs/2.8.php
const fs = require("fs");
 
// асинхронное чтение
fs.readFile("hello.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});
 
// синхронное чтение
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);