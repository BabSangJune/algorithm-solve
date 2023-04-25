const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `61`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [a] = input().split(' ').map(Number);

if (90 <= a && a <= 100) {
    console.log("A");
} else if (80 <= a && a <= 89) {
    console.log("B");
} else if (70 <= a && a <= 79) {
    console.log("C");
} else if (60 <= a && a <= 69) {
    console.log("D");
} else {
    console.log("F");
}
