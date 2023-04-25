// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//         ? fs.readFileSync('/dev/stdin').toString()
//         : `12
// 5
// `
// ).split('\n');
//
// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

const fs = require('fs');

const [x, y] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const result = () => {
    if (x > 0 && y > 0) {
        return 1
    }
    if (x < 0 && y > 0) {
        return 2
    }
    if (x < 0 && y < 0) {
        return 3
    }
    if (x > 0 && y < 0) {
        return 4
    }
}

console.log(result())
