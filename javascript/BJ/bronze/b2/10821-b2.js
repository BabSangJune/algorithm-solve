const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `10 5
1 6 4
3 9 8
2 10 5
1 3 3
2 6 2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();


// @todo 이해하고 다시 풀어보기 check1
const [bracketCount, changeCount] = input().split(' ').map(Number)

let bracketArr = []
for (let i = 1; i <= bracketCount; i++) {
    bracketArr.push(i)
}

let cnt = 0
while (cnt < changeCount) {
    cnt++
    const [start, end, standard] = input().split(' ').map(Number)

    console.log(start, end, standard)
}

// while (cnt < changeCount) {
//     cnt++
//     const [start, end, standard] = input().split(' ').map(Number)
//
//     console.log(start, end, standard)
// }
