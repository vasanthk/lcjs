/**
 * @param {character[][]} board
 * @return {boolean}
 *
 * Your runtime beats 86.67% of javascriptsubmissions.
 */
var isValidSudoku = function (board) {
  var dupCheck;
  // col
  for (var i = 0; i < board.length; i++) {
    dupCheck = {};

    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] !== '.' && dupCheck[board[i][j]]) {
        return false;
      } else {
        dupCheck[board[i][j]] = true;
      }
    }
  }
  // row
  for (i = 0; i < board.length; i++) {
    dupCheck = {};

    for (j = 0; j < board[0].length; j++) {
      if (board[j][i] !== '.' && dupCheck[board[j][i]]) {
        return false;
      } else {
        dupCheck[board[j][i]] = true;
      }
    }
  }
  // 9 x 9 blocks
  for (i = 0; i < board.length; i += 3) {
    for (j = 0; j < board.length; j += 3) {
      dupCheck = {};

      for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
          if (board[i + x][j + y] !== '.' && dupCheck[board[i + x][j + y]]) {
            return false;
          } else {
            dupCheck[board[i + x][j + y]] = true;
          }
        }
      }
    }
  }

  return true;
};