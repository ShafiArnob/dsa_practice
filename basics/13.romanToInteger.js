
 const romanToInt = function(s) {
  const romans = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
  const subtractionUsed = {"IV":4,"IX":9,"XL":40,"XC":90,"CD":400,"CM":900}
  let sum = 0
  let i = s.length-1
  while(i>=0){
    if(Object.keys(subtractionUsed).includes((s[i-1]+s[i]))){
      sum+=subtractionUsed[(s[i-1]+s[i])]
      i--
    }
    else{
      sum+=romans[s[i]]
    }
    i--
  }
  return sum
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
