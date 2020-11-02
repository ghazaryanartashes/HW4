function beautyLog(matrix) {
    for (let i = 0; i < matrix.length; ++i) {
        console.log(matrix[i]);
    }
}

function getBlankMatrix(matrix) {
    let newMat = [];
    for (let i = 0; i < matrix.length; ++i) {
        newMat[i] = []
    }
    return newMat;
}


function det(matrix) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
}

function trace(matrix) {
    let sum = 0;
    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[0].length; ++col) {
            if (row == col) {
                sum += matrix[row][col]
            }
        }
    }
    return sum;
}

function sum(A, B) {
    if (A.length !== B.length || A[0].length !== B[0].length) {
        console.log('error');
        return;
    }

    for (let row = 0; row < A.length; ++row) {
        for (let col = 0; col < A[0].length; ++col) {
            A[row][col] += B[row][col]
        }
    }

    return A;
}

function multWithNumber(matrix, number) {
    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[0].length; ++col) {
            matrix[row][col] *= number;
        }
    }
    return matrix;
}


function transpose(matrix) {
    let newMat = getBlankMatrix(matrix);
    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[0].length; ++col) {
            newMat[row][col] = matrix[col][row]
        }
    }

    return newMat;
}

function inverse(matrix) {
    let determ = det(matrix);
    let newMat = getBlankMatrix(matrix);
    newMat[0][0] = matrix[1][1];
    newMat[1][1] = matrix[0][0];
    newMat[0][1] = -matrix[0][1];
    newMat[1][0] = -matrix[1][0];

    return multWithNumber(newMat, 1 / determ)
}

module.exports = {
    beautyLog,
    det,
    trace,
    sum,
    multWithNumber,
    transpose,
    inverse
}

