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

console.log(basicRectangle(8));
