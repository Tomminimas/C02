const readline = require('readline-sync');

let a = Number(readline.question('Nhap so kw dien:  '));

if (a < 100) {
    Sotiendien = 2000 * a;
}
else {
    if (100 <= a && a < 200) {
        Sotiendien = 2500 * a;
    }
    else {
        Sotiendien = 3500 * a;
    }
}
console.log('So tien dien cua ban la: ' + Sotiendien + ' dong');