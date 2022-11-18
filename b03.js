const readline = require('readline-sync');

let a = Number(readline.question('Nhap canh a:  '));
let b = Number(readline.question('Nhap canh b:  '));
let c = Number(readline.question('Nhap canh c:  '));

if (a == b || b == c || c == a) {
    console.log('Tam giac can');
}
else {
    console.log('Tam giac khong can');
}