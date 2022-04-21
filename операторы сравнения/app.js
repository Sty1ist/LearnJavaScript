'use strict';

// let numberOfFilms = prompt('Сколько фильмов уже посмотрели?', '5');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// }

// let a = prompt('Один из последних просмотренных фильмов?', 'CODA');
// let b = prompt('На сколько оцените его?', '7.5');
// let c = prompt('Один из последних просмотренных фильмов?', 'CODA');
// let d = prompt('На сколько оцените его?', '7.5');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// console.log(personalMovieDB.count);
// console.log(personalMovieDB);


// console.log(5 > 4); //true
// console.log("ананас" > "яблоко"); //false
// console.log("2" > "12"); //true
// console.log(undefined == null); //true
// console.log(undefined === null); //false
// console.log(null == "\n0\n"); //false
// console.log(null === +"\n0\n"); //false


// console.log(undefined == null);

// let jsCompany = prompt('Какое оф название JS?', '');

// if (jsCompany == 'ECMAScript') {
//     console.log('Верно!');
// } else {
//     console.log('Не знаете? “ECMAScript”!!');
// }

// let number = prompt('Веедите код', '1');

// if (number > 0) {
//     console.log(1);
// } else if (number < 0) {
//     console.log(-1); 
// } else (number == 0){
//     console.log(0);
// }
// let result;
// ('a' + 'b' < 4) ? result = 'Мало' : result = 'Много';
// console.log(result);

// result = ('a' + 'b' < 4) ? 'Мало' : 'Много';

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// let login;
// let message1 = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ?'Нет логина' : '';

// let question = prompt('Какой сейчас год?', '');

// if (question < 2022) {
//     console.log(" Мало!"); 
// } else if (question > 2022) {
//     console.log("Много!");
// } else {
//     console.log("DA!DADADA!");
// }

//  


//Тернарный

// num = 45;

// (num == 40) ? console.log('Yes') : console.log('NO!');

//switch case
// let catName = prompt('Whats name your cat?', '');

// switch (catName) {
//     case 'Pan Cotskiy':
//         console.log('Your cat name ' + catName);
//         break;
//     case 'Murko':
//         console.log('Your cat name ' + catName);
//         break;
//     case 'Korjik':
//         console.log('Your cat name ' + catName + ',and your kid');
//         break;
//     default:
//         console.log('Yon dont know your kd name!!');
//         break;
// }

// let JsCompanyName = prompt('Какая компания создала JS?', '');

// if (JsCompanyName == 'Netscape') {
//     console.log('yes');
// } else {
//     console.log('ou nont krow Netscape company? lol, you are noob');
// }

// let num = prompt('add you number', '');

// if (num > 1) {
//     console.log(1);
// } else if (num < 0) {
//     console.log(-1);
// } else {
//     console.log('0');
// }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }


// let result = (a + b < 4) ? 'little' : ' big';
// console.log(result);

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let login ='Директор';
// let message = (login == 'Сотрудник') ? 'Привет'
//     : (login == 'Директор') ? 'Здравствуйте'
//     : (login == '') ? 'Нет логина' : '';
    
// console.log(message);
        


// var select = document.querySelector('select');
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   var choice = select.value;

//   if (choice === 'sunny') {
//     para.textContent = 'Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.';
//   } else if (choice === 'rainy') {
//     para.textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
//   } else if (choice === 'overcast') {
//     para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
//   } else {
//     para.textContent = '';
//   }
// }

// var select = document.querySelector('select');
// var html = document.querySelector('html');
// document.body.style.padding = '10px';

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.onchange = function() {
//   ( select.value === 'black' ) ? update('black','white') : update('white','black');
// }


// let age = prompt('press number', '0');
// if (age >= 14 && age <= 90) {
//     console.log('В диапазоне нужного');
// } else {
//     console.log('Не в диапазоне нужного!')
// }
// let x = -1;
// console.log(Boolean(x));

// let login = prompt('Введите логин','Админ');
// let pass;

// if (login == 'Админ') {
//     pass = prompt('Введите ваш пароль' ,'2288');
//     if (pass == 2288 ) {
//         alert('Рад вас видеть!')
//     } else if (pass == '') {
//         alert('Отменено');
//     } else {
//         alert('Не верный пароль!')
//     }
// } else if (login == '') {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю!');
// }

// let firsName;
// let lastName = 'Riabenko';
// let nickName;

// alert(firsName ?? lastName ?? nickName ?? 'noName');
// alert(firsName || lastName || nickName || 'noName');

// let height = 0;
//Задачки по логическим оператора && and ||
// console.log(NaN || 2 || undefined); //+ (2)
// console.log(NaN && 2 && undefined); //(NaN) +
// console.log(1 && 2 && 3); //(3) +
// console.log(!1 && 2 || !3);//false \\ false +
// console.log(25 || null && !3);//25 +
// console.log(NaN || null || !3 || undefined || 5); //5+
// console.log(NaN || null && !3 && undefined || 5); //5+
// console.log(5 === 5 && 3 > 1 || 5);//true+

//задачки по if
//1)
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
//     //true
// }

//2)
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
//     //true(2)
// }

//3)
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
//     //false
// }

//switch

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// let yourBrowser = 'Opera2';

// if (yourBrowser === 'Edge') {
//     console.log( "You've got the Edge!" );
// } else if (yourBrowser === 'Chrome' ||
//     yourBrowser == 'Firefox' ||
//     yourBrowser == 'Safari' ||
//     yourBrowser == 'Opera') {
//     console.log( 'Okay we support these browsers too' );
// } else {
//     console.log( 'We hope that this page looks ok!' );
// }


// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// let num = +prompt('Введите число между 0 и 3', '');
// // num = Number(num);

// switch (num) {
//     case 0:
//         console.log('Вы ввели число 0');
//         break;
//     case 1:
//         console.log('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         console.log('Вы ввели число 2, а может и 3');
//         break;
    
// }