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
    let matrix = sum(A, transpose(A))

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
    [1, 5, 6],
    [5, 1, 4],
    [6, 4, 1],
]


