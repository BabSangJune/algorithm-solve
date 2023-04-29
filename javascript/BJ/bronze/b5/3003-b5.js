const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `0 1 2 2 2 7`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const pieces = input().split(' ').map(Number)

// 1, 1, 2, 2, 2, 8
const piecesCount =  [1, 1, 2, 2, 2, 8]
const result = pieces.map((piece, idx) => {
    return piecesCount[idx] - piece
})

console.log(...result)
