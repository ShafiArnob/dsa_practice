function removeDuplicates(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (newStr.includes(str[i])) {
      continue;
    }

    newStr += str[i];
  }

  return newStr;
}

console.log(removeDuplicates("Hello World"));
