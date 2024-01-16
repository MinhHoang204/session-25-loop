let n = prompt("Nhập vào số nguyên n");
let a = 0;
let b;
while (n > 0){
    b = n % 10;
    if(n % 2 == 0){
        count++;
    }
    n/=10;
}
console.log("Số lượng chữ số chẵn trong n là:");