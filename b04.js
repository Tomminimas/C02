const readline = require('readline-sync');

let year = Number(readline.question('Nhap so nam:  '));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log('Nam ' + year + ' la nam nhuan');
        }
        else {
            console.log('Nam ' + year + ' khong la nam nhuan');
        }
    }
    else {
        console.log('Nam' + year + ' la nam nhuan');
    }
}
else {
    console.log('Nam ' + year + ' khong la nam nhuan');
}