const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const a = input();

for (let i = 1; i <= a; i++) {
    const star = '*';
    console.log(star.repeat(i));
}
