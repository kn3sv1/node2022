function display(data, callback){
 
    // с помощью случайного числа определяем ошибку
    var randInt = Math.random() * (15 - 1) + 1;
    var err = randInt>15? new Error("Ошибка выполнения. randInt больше 5"): null;
     
    setTimeout(function(){
        callback(err, data);
    }, 3000);
}
 
console.log("Начало работы программы");
 
display("Обработка данных...", function (err, data){
 
    if(err) throw err;
    console.log(data);
});
 
console.log("Завершение работы программы");