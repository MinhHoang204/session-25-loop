let n;
let p = 0;
let S = 1;
do{
    n = prompt("Nhập vào số nguyên dương n");
    if(n < 1){
        console.log("Vui lòng nhập 1 số nguyên dương");
        break;
    } else {
        for(let i = 1; i <= n; i++){
            n = n * 10 + i;
            p = p + i;
            S = S + i;
        }
        console.log("Kết quả" + "S");
    }
}