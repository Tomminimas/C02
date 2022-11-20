const readline = require("readline-sync");

let a, b, n;
n = Number(readline.question("Nhap vao so n:  "));
a = parseInt(n) % 10;
b = parseInt(n / 10);

if (n < 10 || n > 99) {
  console.log("Nhap vao hai chu so");
} else {
  switch (b) {
    case 1:
        s = "Muoi ";
        break;
    case 2:
        s = "Hai muoi ";
        break;
    case 3:
        s = "Ba muoi ";
        break;
    case 4:
        s = "Bon muoi ";
        break;
    case 5:
        s = "Nam muoi ";
        break;
    case 6:
        s = "Sau muoi ";
        break;
    case 7:
        s = "Bay muoi ";
        break;
    case 8:
        s = "Tam muoi ";
        break;
    case 9:
        s = "Chin muoi ";
        break;
    default:
        console.log("Khong hop le");
    }
  switch (a) {
    case 1:
        s += "mot";
        break;
    case 2:
        s += "hai";
        break;
    case 3:
        s += "ba";
        break;
    case 4:
        s += "bon";
        break;
    case 5:
        s += "nam";
        break;
    case 6:
        s += "sau";
        break;
    case 7:
        s += "bay";
        break;
    case 8:
        s += "tam";
        break;
    case 9:
        s += "chin";
        break;
    default:
      console.log("Khong hop le");
    }
}
console.log(s);