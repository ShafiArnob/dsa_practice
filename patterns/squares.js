/*
 *Q
 ********
 ********
 ********
 ********
 */
function basicRectangle(col, row) {
  let rect = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      rect += "*";
    }
    rect += "\n";
  }
  return rect;
}

/*
 *Q: Hollow Rectangle
 **********
 *        *
 *        *
 *        *
 *        *
 *        *
 *        *
 **********
 */

function hollowRectangle(row, col) {
  let rect = "";
  for (let i = 0; i < row; i++) {
    if (i == 0 || i == row - 1) {
      for (let j = 0; j < col; j++) {
        rect += "*";
      }
    } else {
      rect += "*";
      for (let j = 0; j < col - 2; j++) {
        rect += " ";
      }
      rect += "*";
    }
    rect += "\n";
  }
  return rect;
}
