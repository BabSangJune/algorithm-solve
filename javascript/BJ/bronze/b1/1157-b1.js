const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `baaa`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const word = input().toLowerCase();

let count = {}

for (let i = 0; i < word.length; i++) {
    if (!count[word[i]]) {
        count[word[i]] = 1
    } else {
        count[word[i]] += 1
    }
}

let result
let max = 0
Object.entries(count).forEach(([key, value], idx )=> {
    if (max < value) {
        max = value
        result = key
    } else if (max === value) {
        result = '?'
    }
})

console.log(result.toUpperCase())
