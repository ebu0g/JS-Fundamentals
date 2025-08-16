function argument(arg1, arg2){
    if (arg1 && arg2) {
        return arg1 + " " + arg2;
    } else if (arg1) {
        return "HBTN";
    } else {
        return "";
    }
}

result = argument("python" + " fun");
console.log(result);
console.log(argument("Python")); 
console.log(argument()); 