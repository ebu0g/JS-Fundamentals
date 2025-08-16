function callMe(first, second) {
  if (first === undefined) {
    first = "undefined";
  }
  if (second === undefined) {
    second = "undefined";
  }
  console.log(`${first} is ${second}`);
}

// Examples:
callMe("Python", "fun");   // Python is fun
callMe("HBTN");            // HBTN is undefined
callMe();                  // undefined is undefined
