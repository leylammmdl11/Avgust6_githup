function value(a, b) {
    if (a < b) {
        return a;
    } else if (a == b) {
        return "equal";
    } else {
        return b;
    }
}
 
const little = value(5,5)
console.log (little)