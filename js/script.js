'use strict';
 

let userAge = +prompt('2 + 2 = ?', '');
switch (userAge) {
    case 4:
        console.log('Молодец');
        break;
    case 5:
        console.log('Не Дядь, много!');
        break;
    case 3:
        console.log('Мало!');
        break;
    default:
        alert('Не угадал!');
}   
