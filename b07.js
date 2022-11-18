const readline = require('readline-sync');

let a = Number(readline.question('Nhap so a:  '));
let b = Number(readline.question('Nhap so b:  '));
let c = Number(readline.question('Nhap so c:  '));

if (a == 0) {
    if ( b == 0) {
        if (c == 0) {
            console.log('Phuong trinh vo so nghiem');
        }
        else {
            console.log('Phuong trinh vo nghiem');
        }
    }
    else {
        Nghiem1 = -c / b;
        console.log('Phuong trinh co 1 nghiem duy nhat', Nghiem1);
    }
}
else {
    delta = b * b - 4 * a * c;
    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log('Nghiem thu nhat x1 = ', x1);
        console.log('Nghiem thu nhat x2 = ', x2);
    }
    else {
        if (delta == 0) {
            NghiemKep = -b / 2 * a;
            console.log('Phuong trinh co nghiem kep: x1 = x2 = ', NghiemKep);
        }
        else {
            console.log('Phuong trinh vo nghiem');
        }
    }
}