function basicTriangle(level) {
  let triangle = "";
  for (let i = 0; i < level; i++) {
    for (let j = 0; j < i; j++) {
      triangle += "*";
    }
    triangle += "\n";
  }
  return triangle;
}

console.log(triangle(10));
