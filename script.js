// First Method
function repeatString(string, times){
    return string.repeat(times);
}
console.log(repeatString("Hello, World! ", 3));

// Second method
function repeatStr(number, str){
    let res = "";
    for(let i = 0; i < number; i++){
        res += str;
    }
    return res;
}
console.log(repeatStr(3, "Hello, Kitty! "));