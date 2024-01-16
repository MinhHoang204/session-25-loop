let n = prompt ("Nhập vào số nguyên dương:");
let a = 0; b = 1, c;

if (n == 0){
    console.log("Số Fibonacci thứ 0 là 0");
} else if {
    console.log("Số Fibonacci thứ 1 là 1");
} else {
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    console.log("Số Fibonacci thứ n là", c);
}