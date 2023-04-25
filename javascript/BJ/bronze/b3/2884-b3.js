const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `23 40`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let [hour, min] = input().split(' ').map(Number);

solution(hour, min);
function solution(hour, min) {
    let Hour = hour;
    let minute = min - 45;
    
    if (minute < 0) {
        minute += 60;
        Hour--;
        if (Hour === -1) {
            Hour = 23;
        }
    }
    console.log(Hour, minute);
}
