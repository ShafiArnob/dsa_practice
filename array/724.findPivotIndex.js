const pivotIndex = function(nums) {
  
  for(let i=0;i<nums.length;i++){
    let lSum=0
    let rSum=0
    //left 
    for(let j=0;j<i;j++){
      lSum+=nums[j]
    }
    //right
    for(let k=i+1;k<nums.length;k++){
      rSum+=nums[k]
    }
    if(lSum===rSum){
      return i;
    }
  }
  return -1
}

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));
