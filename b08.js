const readline = require('readline-sync');

let a, b, c; 
a = Number(readline.question('Nhap ngay:  '));
b = Number(readline.question('Nhap thang:  '));
c = Number(readline.question('Nhap nam:  '));

switch (b) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
        if (ngay > 0 && ngay < 31) {
            console.log('Valid', a, b ,c);
            break;
        }
        else {
            console.log('Unvalid', a, b ,c);
            break;
        }
    case 4: case 6: case 9: case 11: 
        if (ngay > 0 && ngay < 30) {
            console.log('Valid', a, b ,c);
            break;
        }
        else {
            console.log('Unvalid', a, b ,c);
            break;
        }
    case 2: 
        if (ngay > 0 && ngay < 28) {
            console.log('Valid', a, b ,c);
            break;
        }
        else {
            console.log('Unvalid', a, b ,c);
            break;
        }
    default:
        console.log('Unvalid', a, b ,c);
        break;
}
