const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const count = Number(input())

for(let i=1; i < count; i++){
    let blank = ' '.repeat( (count-i) );
    let stars = '*'.repeat( i+(i-1) );
    console.log( blank + stars );
}

for(let i=count; i > 0; i--) {
    let blank = ' '.repeat( (count-i) );
    let stars = '*'.repeat( i+(i-1) );
    console.log( blank + stars );
}
