const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5 5`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [a, b] = input().split(' ').map(Number);
if (a < b) {
    console.log('<')
}

if (a > b) {
    console.log('>')
}

if (a === b) {
    console.log('==')
}
