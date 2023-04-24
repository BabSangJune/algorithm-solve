const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `6 2 5`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const arr = input().split(' ').map(Number).sort((x, y) => x-y)

const [first, second, third] = arr

const result = () => {
    if (first === second  && first === third) {
        return 10000 + (first * 1000)
    }
    if (first === second  || second === third) {
        return 1000 + (second * 100)
    }
    
    return third * 100
}

console.log(result())
