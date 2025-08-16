function myFunction(arg1, arg2) {
  if (arg1 !== undefined && arg2 !== undefined) {
    console.log(arg1 + " " + arg2);
  } else if (arg1 !== undefined && arg2 === undefined) {
    console.log(arg1 + " is undefined");
  } else {
    console.log("undefined is undefined");
  }
}


myFunction("Python", "fun");   // Python fun
myFunction("HBTN");            // HBTN is undefined
myFunction();                  // undefined is undefined
