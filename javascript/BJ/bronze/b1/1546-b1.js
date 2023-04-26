const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `4
10 20 0 100`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const n = input()

const scoreArr = input().split(' ').map(Number).sort((a, b) => a - b)

const subjectNum = scoreArr.length

const max = scoreArr[scoreArr.length-1]

let totalScore = 0


for (let i = 0; i <= scoreArr.length-1; i++) {
    const convertScore = scoreArr[i]/max*100
    
    totalScore += convertScore
}

const result = totalScore / subjectNum
console.log(result)
