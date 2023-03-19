
function firstRecurringChar(arr){
  const map = {}
  for(let i=0;i<arr.length;i++){
    if(map[arr[i]] !== undefined){
      return arr[i]
    }
    else{
      map[arr[i]] = i
    }
  }

  return undefined
}

console.log(firstRecurringChar([2,5,5,2,3,4,5,6]));