/* Q: Hollow Inverted Half Pyramid
 **********
 *       *
 *      *
 *     *
 *    *
 *   *
 *  *
 * *
 **
 *
 */
function hollowInvertedHalfPyramid(n) {
  let pyramid = "";
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (row == 0 || col == 0 || col == n - row - 1) {
        pyramid += "*";
      } else {
        pyramid += " ";
      }
    }
    pyramid += "\n";
  }
  return pyramid;
}

console.log(hollowInvertedHalfPyramid(10));
