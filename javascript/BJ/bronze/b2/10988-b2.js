const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `level`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

// @todo 
const word = input()
const mid = Math.round(word.length / 2)
