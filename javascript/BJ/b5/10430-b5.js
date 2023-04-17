const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5 8 4`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [a, b, c] = input().split(' ').map(Number)

console.log((a+b)%c)
console.log(((a%c)+(b%c))%c)
console.log((a*b)%c)
console.log(((a%c)*(b%c))%c)

