const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `3`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const a = input();

let result = 0

for (let i = 1; i <= a; i++) {
    result += i
}

console.log(result)
