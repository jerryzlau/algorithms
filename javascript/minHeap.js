function MinHeap(){
  this.map = [null];
}

MinHeap.prototype.insert = function(val){
  this.map.push(val);
  this.heapifyUp();
};

MinHeap.prototype.remove = function(){
  const min = this.map[1];

  // if there is not node in the tree we return null
  if(this.map.length === 1){
    return null;
  }else if(this.map.length === 2){ // if there is only 2 elements we pop and return that element
    return this.map.pop();
  }else{ // else we pull the last element up and heapify down
    this.map[1] = this.map.pop();
    this.heapifyDown();
  }
  
  return min;
};

MinHeap.prototype.heapifyUp = function(){
  let currentIdx = this.map.length-1;

  while(currentIdx > 0){
    const parentIdx = Math.floor(currentIdx/2);

    // if parent is larger than current then swap
    if(this.map[parentIdx] > this.map[currentIdx]){
      const tempParent = this.map[parentIdx];
      this.map[parentIdx] = this.map[currentIdx];
      this.map[currentIdx] = tempParent;
    }

    currentIdx = parentIdx;
  }
};

MinHeap.prototype.heapifyDown = function(){
  // we heapify from the root
  let currentIdx = 1;

  while(true){
    const childIdx = currentIdx * 2;
    const sibIdx = currentIdx * 2 + 1;
    let swapTargetIdx = null;

    // if current is larger than child then we might swap them 
    if(this.map[currentIdx] > this.map[childIdx]){
      swapTargetIdx = childIdx;
    }

    // if sib is less than current and child
    if (this.map[sibIdx] < this.map[currentIdx] && this.map[sibIdx] < this.map[currentIdx] && this.map[sibIdx] < this.map[childIdx]) {
      swapTargetIdx = sibIdx;
    }

    // check if we need to swap, if not, we stop here
    if(swapTargetIdx === null) break;

    // now we want to swap
    const tempParent = this.map[currentIdx];
    this.map[currentIdx] = this.map[swapTargetIdx];
    this.map[swapTargetIdx] = tempParent;

    currentIdx = swapTargetIdx;
  }
};

let minHeap = new MinHeap();

minHeap.insert(7);
minHeap.insert(8);
minHeap.insert(6);
minHeap.insert(1);
minHeap.insert(3);

console.log(minHeap.map);

console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());


console.log(minHeap.map);