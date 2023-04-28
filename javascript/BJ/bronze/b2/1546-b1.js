const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5 4
1 2
3 4
1 4
2 2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
