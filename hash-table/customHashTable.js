class Hashtable{
  constructor(size){
    this.data = new Array(size)
  }

  _hash(key){
    let hash = 0
    for(let i=0; i<key.length;i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  display(){
    console.log(this.data);
  }

  set(key, value){
    let address = this._hash(key)
    if(!this.data[address]){
      this.data[address] = []
    }
    this.data[address].push([key,value])
    return this.data
  }

  get(key){
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if(currentBucket.length){
      for(let i=0; i<currentBucket.length; i++){
        if(currentBucket[i][0]===key){
          return currentBucket[i][1]
        }
      }
    }
  }

  keys(){
    const keysArray = []
    for(let i=0;i<this.data.length;i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }
}

const hash = new Hashtable(50)
hash.set("grapes", 1000)
hash.set("apples", 54)
hash.set("onions", 2)
console.log(hash.keys())
hash.display()