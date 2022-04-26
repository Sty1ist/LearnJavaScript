'use strict';

//Цикли

// while (умова) {
//     //код
//     //тіло циклу
// }

// let i = 0;
// while (i < 3) {
//     console.log(i);
//     i++;
// }

// let i = 3;

// while (i) {
//     console.log(i);
//     i--;
// }

//do while

// do {
//     //тело цикла
// } while (condition);

//for

// for (начало; условие; шаг) {
//     //тело цикла
// }


// let billion = 1000000000;
// billion = 1e9;
// let num = null + 1;

// let arrObj = {
//     '0': 'a',
//     '1' : 'b'
// }

// console.log(arrObj['0']);

// console.log(2.6e3);

//to fixed
// let someNumber = 3.763450;
// console.log(someNumber.toFixed(3));

// let num = 12.34;
// console.log(num.toFixed(4));


// let a = 0.1;
// let b = 0.2;

// let sum = 0.1 + 0.2;
// sum = sum.toFixed(2);
// console.log(sum);

// +sum.toFixed(3);
// console.log(sum);

// //parseInt() & parseFloat()
// let px4 = '12.555px';

// px4 = parseFloat(px4);

// console.log(px4);

// // math

// console.log(Math.random());

// Math.max / min 

// console.log(Math.max(10, -2, 5, 33));
// console.log(Math.min(10, -2, 5, 33));

// let a = +prompt('Введите первое число', '1');
// let b = +prompt('Введите второе число', '2');
// alert(a + b);


// alert( 1.35.toFixed(2) );
// thirdTask()

// function thirdTask() {
//     let i;
    
//     for (i = 2; i <= 10; i++) {
        
//         if (i % 2 == 0) {
//             console.log(i);
//         }
        

//     }
    
// }

// fourthTask();

// function fourthTask() {
//     let i = 2;
    
//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }    
//     }  
// }


// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     return arrayOfNumbers;
// }

// function showMesage(name, age = '28') {
//     console.log("My name is " + name + ' ,' + ' and my age in ' + age + ' years');
// }

// showMesage('Maxym');

let guestList = `Anna
Sam
John
`;
console.log(guestList);

let guestList2 = 'Anna\nJohn\nSam';
console.log(guestList2.length);

// let firstName = 'Maksym';

// console.log(firstName[3]);
// console.log(firstName.charAt(3));
// console.log(firstName[firstName.length - 2]);

// for (let char of firstName) {
//     console.log(char);
// }
// let firstName = 'Maksym';
// firstName = firstName[3].toUpperCase();
// console.log(firstName);
// console.log(firstName.toUpperCase());
// console.log(firstName[3].toUpperCase());

// let str = 'Widget with id';
// console.log(str.indexOf('with'));

// let str = "Widget with id";

// if (str.indexOf("Widget") != -1) {
//     let a = str.indexOf("Widget");
//     alert(a); 
// }

// let str = "stringify";
// // 'strin', символы от 0 до 5 (не включая 5)
// console.log( str.slice(0, 5) );
// // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
// console.log( str.slice(0, 1) );

// let str1 = 'maksym';

// function ucFirst(str) {
//     let a = str[0].toUpperCase();
//     let b = str.slice(1);
//     str = a + b;
//     console.log(str);
//     return str;
// }

// ucFirst(str1);

// let newStr = str[0].toUpperCase() + str.slice(1);
// let str3 = 'Spam';
// str3 = 'Viagra';

// function checkSpam(str) {
//     str = str.toLowerCase();
//     if (str.includes("viagra") || str.includes("xxx")) {
//         return true;
//     } else {
//         return false;
//     }
// }

// checkSpam(str3);
// console.log(checkSpam(str3));


// let str5 = 'кку куку ку кукуку ку?';
// let fixLenght = 10;

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 1 + '...');
//     }
// }

// truncate(str5, fixLenght);

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }

// let price = '$120';

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }

// extractCurrencyValue(price);
