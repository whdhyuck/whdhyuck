let str=''
for (let i=0; i<8; i++) {
    str += '*';
    console.log(str)
}

console.log()

str='********'
for (let i=0; i<8; i++) {
    console.log(str.slice(i))
}

console.log()

let str2 = '       '
for (let i=0; i<8; i++) {
    str2 += '*';
    console.log(str2.slice(i))

}

console.log()

let str3='********'
let str4=' '
for (let i=0; i<8; i++) {
    str4 += ' ';
    console.log(str4 + str3.slice(i))
}