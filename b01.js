const readline = require('readline-sync'); 

let a = Number(readline.question('Nhap diem trung binh:  '));
if (a >= 5) {
    console.log('Dau roi!!');
}
else {
    console.log('Rot :((');
}
