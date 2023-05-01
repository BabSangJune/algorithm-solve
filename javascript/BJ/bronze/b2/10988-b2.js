const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `noon`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const word = input()
const mid = word.length/2

const forward = word.slice(0, parseInt(mid));
const back = word.slice(Number.isInteger(mid)?mid:parseInt(mid)+1).split('').reverse().join('');

if (forward === back){
    console.log(1)
} else {
    console.log(0)
}
