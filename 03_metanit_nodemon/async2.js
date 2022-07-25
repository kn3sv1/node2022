function displaySync(callback){
    callback();
}
 
console.log("Начало работы программы");
 
setTimeout(function(){
         
        console.log("timeout 5000");
}, 5000);
 
setTimeout(function(){
         
        console.log("timeout 1000");
}, 1000);
 
displaySync(function(){console.log("without timeout")});
console.log("Завершение работы программы");