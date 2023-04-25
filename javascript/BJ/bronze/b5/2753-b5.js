const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `1600`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [year] = input().split(' ').map(Number);

const check4 = () => {
    if (year % 4 === 0) {
        return true;
    }
    return false;
};

const check100 = () => {
    if (year % 100 !== 0) {
        return true;
    }
    return false;
};
const check400 = () => {
    if (year % 400 === 0) {
        return true;
    }
    return false;
};

const is4 = check4();
const is100 = check100();
const is400 = check400();

const result = () => {
    if (is4 && is100 || is4 && is400) return 1
    return 0
}

console.log(result())
