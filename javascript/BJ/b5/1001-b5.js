const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `3 2
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let [a, b] = input().split(' ').map(Number);
console.log(a - b);
