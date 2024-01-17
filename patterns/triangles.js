/*
 *Q: Half Pyramid
 *
 **
 ***
 ****
 *****
 ******
 *******
 */
function halfPyramid(level) {
  let triangle = "";
  for (let i = 0; i < level; i++) {
    for (let j = 0; j < i; j++) {
      triangle += "*";
    }
    triangle += "\n";
  }
  return triangle;
}

/*
*Q: Pyramid

         *
        * *
       * * *
      * * * *
     * * * * *
    * * * * * *
   * * * * * * *
  * * * * * * * *
 * * * * * * * * *
* * * * * * * * * *
*/
function pyramid(row) {
  let pyramid = "";

  for (i = 0; i <= row; i++) {
    for (j = 0; j < row - i; j++) {
      pyramid += " ";
    }
    for (j = i; j > 0; j--) {
      pyramid += "* ";
    }
    pyramid += "\n";
  }

  return pyramid;
}

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
