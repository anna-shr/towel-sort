
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix == "undefined") {
  return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].sort(function(a, b) {
      return a - b;
    });
    if (i % 2 !== 0) {
      matrix[i] = matrix[i].reverse();
    } 
  }

  let matrix1 = [];

  for(i = 0; i < matrix.length; i++){
      matrix1 = matrix1.concat(matrix[i]);
  }

  return matrix1;
}
