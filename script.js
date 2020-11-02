const {
    beautyLog,
    det,
    trace,
    sum,
    multWithNumber,
    transpose,
    inverse
} = require('./utils.js');


function checkTranspose(A) {
    let B = sum(A, multWithNumber(transpose(A), -1))
    if (trace(B) === 0) {
        console.log('is correct');
    } else {
        console.log('is not correct');
    }
}




function isSym(A) {
    let matrix = [
        [8, 15, 6],
        [8, 10, 4],
        [9, 4, 8],
    ]
    

    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[0].length; ++col) {
            if (matrix[row][col] !== matrix[col][row]) {
                return 'Not Symmetric'
            }
        }
    }
    return 'Symmetric'
}

let M = [
    [8, 15, 6],
    [8, 10, 4],
    [9, 4, 8],
]

console.log(isSym(M));