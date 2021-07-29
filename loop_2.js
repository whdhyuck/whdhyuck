console.log("1번")
let sum = 0;
for (i=1; i<=100; i++) {
    sum += i;
}
console.log(sum)

console.log("2번")
let a =''
for (i=1; i<=5; i++){
    a += i + ' '
    console.log(a)
}

console.log("3번")
for(x=1; x<=9; x++) {
    for (i=1; i<=9; i++) {
     console.log(x + ' * ' + i + ' = ' + x*i)
    }
}

console.log("4번")
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdin.stdout
})
console.log("1. 내 나이는 ?")
console.log("2. 내 성별은 ?")
rl.on('line', line => {
    if (line == '1') {
        console.log("24")
    } else if (line =='2') {
        console.log("남자")
    } else {
        console.log("오류")
    }
    process.exit()
})