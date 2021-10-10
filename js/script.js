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

// const ecmaYear = prompt('в каком году вышел ES6-2015?', '');
// if (ecmaYear > 2015) {
//     console.log('Та это уже поздно!');
//     console.log('Дядь, в можна не!');
// } else if (ecmaYear < 2015){
//     console.log('Не! точно не ранее чем 2015!');
//     console.log('Ты чего дядь?Не угадал!');
// } else {
//     console.log('Ага!=)');
// }

// let accesAllowed;
// let age = prompt('сколько вам лет?', '');
// if (age >= 18) {
//     accesAllowed = true;
//     alert('Acces Alowed!');
// } else {
//     accesAllowed = false;
//     alert('Acces not allowed!!!');
// }

// alert(accesAllowed);

// let age = prompt('Сколько вам лет?', '');
// let accesAllowed = age >= 18;
// alert(accesAllowed);

/* const officialNameJS = prompt('Какое оффициальнон имя JavaScript?', '');

if (officialNameJS == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('«Не знаете? ECMAScript!');
} */


/* const count = +prompt('Введите ваше число', '');
if (count > 0) {
        alert(1);
} else if (count < 0) {
    alert(-1);
} else {
    alert(0);
}
 */

// let a = 5;
// let b = 2;
// let result = a + b < 4 ? alert('Malo') : alert('Много');


/* const login = prompt('Ваша должность', '');
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте':
    (login == '') ? 'Нет логина' :
        '';
alert(`${message} ${login}`); */

let hour = prompt('Который час?', '');
if (hour < 9 || hour > 18) {
    alert('Офис уже закрыт дядя');
} else {
    alert('Як то кажуть: Ласкаво просымо!ДЯДЯ!=))0');
}