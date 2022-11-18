const readline = require('readline-sync');

let a, b, n; 
n = Number(readline.question('Nhap vao so n:  '));
a = parseInt(a) % 10;
b = parseInt(b) / 10;


if (n < 10 || n > 99) {
    console.log('Nhap vao hai chu so');
}
else {
    switch (b) {
        case 1: 
            console.log('Muoi ');
            break;
        case 2: 
            console.log('Hai Muoi ');
            break;
        case 3: 
            console.log('Ba Muoi ');
            break;
        case 4: 
            console.log('Bon Muoi ');
            break;    
        case 5: 
            console.log('Nam Muoi ');
            break;
        case 6: 
            console.log('Sau Muoi ');
            break;
        case 7: 
            console.log('Bay Muoi ');
            break;
        case 8: 
            console.log('Tam Muoi ');
            break;
        case 9: 
            console.log('Chin Muoi ');
            break;
        default: 
            console.log('Khong hop le');
    }
    switch (a) {
        case 1: 
            console.log('Mot ');
            break;
        case 2: 
            console.log('Hai ');
            break;
        case 3: 
            console.log('Ba ');
            break;
        case 4: 
            console.log('Bon ');
            break;    
        case 5: 
            console.log('Nam ');
            break;
        case 6: 
            console.log('Sau ');
            break;
        case 7: 
            console.log('Bay ');
            break;
        case 8: 
            console.log('Tam ');
            break;
        case 9: 
            console.log('Chin ');
            break;
        default: 
            console.log('Khong hop le');
    }
}
console.log(n);