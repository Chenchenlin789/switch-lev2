// 3. conditions
// Switch statement

let time = 8
switch (time) {
    case 9:
        //block
        console.log("it's 9")
        break;
    case 10:
        console.log("it's 10")

    default:
        //block
        console.log("who cares")
        break;
}

let operator = " "
switch (operator) {
    case 'edge':
        console.log("you have edge")
    case 'chrome':
        console.log("supported")
        break;
    case 'safari':
        console.log('supported')
    case 'firefox':
        console.log('firefox')

    default:
        console.log("we hope it works")
        break;
}

//case groupping
switch (operator) {
    case 'edge':
        console.log('you have the edge')
    case 'chrome':
    case 'safari':
    case 'firefox':
        console.log('supported')
        break;
    default:
        console.log("we hope it works")
        break;
}

let version = 5
switch (operator + version) {
    case 'safari5':
    case 'chrome5':
        console.log('not supported')
        break;
    case 'safari10':
    case 'firefox10':
        console.log('supported')
        break;
    default:
        break;
}

// let a = Number(prompt('a?'))
// if (a == 0) {
//     alert(0)
// }
// if (a == 1) {
//     alert(1)
// } if (a == 2) {
//     alert(2)
// }

// in switch conditionals
let a = Number(prompt('a?'))
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}