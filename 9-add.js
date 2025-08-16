const args = process.argv.slice(2);

const a = parseInt(args[0]);
const b = parseInt(args[1]);

function add(x, y){
    return x + y;
}

if (args.length !== 2 || isNaN(a) || isNaN(b)) {
    console.log(NaN);
} else {
    console.log(add(a, b));
}