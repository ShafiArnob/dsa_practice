const runningSum = function(nums) {
  newArr=[]
  for(let i=0;i<nums.length;i++){
    let sum = 0
    for(let j=0;j<=i;j++){
      sum+=nums[j]
    }
    newArr.push(sum)
  }

  return newArr
}

console.log(runningSum([1,1,1,1,1]));