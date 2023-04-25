const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `77 77 7777`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [a, b, c] = input().split(' ').map(Number);
console.log(a+b+c)
