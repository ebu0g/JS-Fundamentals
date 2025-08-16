const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("HBTN");
} else if (args.length === 1) {
  console.log(args[0]);
} else if (args.length === 2) {
  console.log(`${args[0]} ${args[1]}`);
}

