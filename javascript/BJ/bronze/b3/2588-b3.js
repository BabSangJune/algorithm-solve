const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `472
385`
).split('\n');

// const input = (() => {
//     let line = 0;
//     console.log(line)
//     return () => stdin[line++];
// })();

const [a, b] = stdin

for (let i = b.length-1; i >= 0; i-- ) {
    console.log(a * b[i])
}
console.log(a * b)
