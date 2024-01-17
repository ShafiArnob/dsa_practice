/* Q: Hollow Full Pyramid
// prettier-ignore
                            *
                         *     *
                      *           *
                   *                 *
                *                       *
             *                             *
          *                                   *
       *                                         *
    *                                               *
 *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *              
 */
function hollowFullPyramid(n) {
  let pyramid = "";
  for (let row = 0; row < n; row++) {
    let k = 0;
    for (let col = 0; col < 2 * n - 1; col++) {
      if (col < n - row - 1) {
        pyramid += "   ";
      } else if (k < 2 * row + 1) {
        if (k == 0 || k == 2 * row || row == n - 1) {
          pyramid += " * ";
        } else {
          pyramid += "   ";
        }
        k++;
      } else {
        pyramid += "   ";
      }
      // pyramid += "*";
    }
    pyramid += "\n";
  }
  return pyramid;
}

console.log(fullPyramid(10));
