const longestCommonPrefix = function(strs) {
  let chars=""
  if(strs.length===1){
    return strs[0]
  }
  for(let i=0;i<=200;i++){
    const temp = strs[0][i]
    if(!temp){
      return chars
    }
    
    
    j=0
    while(j<strs.length){
      if(strs[j]===""){
        return chars
      }
      if(strs[j][i]!==temp){
        return chars
      }
      j++
    }
    chars+=temp
  }
  return chars
};



console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log([""]);
console.log(["a"]);
console.log(["flower","flower","flower","flower"]);
