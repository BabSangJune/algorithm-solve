const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const a = input()

for (let i = 1; i < 10; i++ ) {
    console.log(`${a} * ${i} = ${a * i}`)
}
