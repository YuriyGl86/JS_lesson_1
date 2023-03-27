"use strict";

let n = Math.floor(Math.random() * 1000);
console.log('загадано '+ n);

alert("Загадано число от 0 до 1000. Попробуйте отгадать.");

while(true){
    let numberFromUser = prompt("Введите число");
    console.log(numberFromUser);
    if(isNaN(numberFromUser) || numberFromUser<0 || numberFromUser > 1000)
        {console.log(numberFromUser);
        alert("Вы ввели не число, либо число не попадает в диапазон 0-1000");
        }
    else {
        if(numberFromUser == n)
            {alert("поздравляем! Вы угадали!");
            break;}
        else if (numberFromUser < n)
            {alert("неверно. Слишком мало")}
        else if (numberFromUser > n)
            {alert("Неверно. Слишком много")}
    }
}