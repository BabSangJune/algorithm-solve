const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `17 40
80
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [hour, min] = input().split(' ').map(Number)
const [cookTime] = input().split(' ').map(Number)

const result = () => {
    let resultHour = hour
    let resultMin = min + cookTime
    while (resultMin >= 60) {
        resultHour += 1
        resultMin -= 60
    }
    if (resultHour >= 24) {
        resultHour -= 24
    }
    
    console.log(`${resultHour} ${resultMin}`)
}

result()
