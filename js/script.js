'use strict';

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+(a) + +(b)); // 12

/* (a > b); //больше
a < b; //меньше
a >= b; //больше или равно
a <= b; //меньше или равно
a == b; // равно
a != b; // не равно */

// операторы сравнения


// let art = 5;
// let tattoo = 6;
// let copyes = (art != tattoo);
// console.log(copyes);

// console.log(0 === false);

/* 5 > 4  //true
"ананас" > "яблоко" //false
"2" > "12"  //true 
undefined == null  //true
undefined === null  //false
null == "\n0\n"  //false
null === +"\n0\n"  //false */


/* const ecmaYear = +prompt('в каком году вышел ES6-2015?', '');
if (ecmaYear == 2015) {
    console.log('Верно!');
    console.log('Дядь, ты молодец!');
} else {
    console.log('Вухахахаха, нуб, неугадал!');
    console.log('ГЫЫыыыЫ, НЕ ВЕРНО!!!!');
} */

const ecmaYear = prompt('в каком году вышел ES6-2015?', '');
if (ecmaYear > 2015) {
    console.log('Та это уже поздно!');
    console.log('Дядь, в можна не!');
} else if (ecmaYear < 2015){
    console.log('Не! точно не ранее чем 2015!');
    console.log('Ты чего дядь?Не угадал!');
} else {
    console.log('Ага!=)');
}