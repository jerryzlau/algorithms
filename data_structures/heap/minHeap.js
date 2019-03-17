// https://www.cs.cmu.edu/~adamchik/15-121/lectures/Binary%20Heaps/heaps.html
function MinHeap(){
  this.map = [null];
}

MinHeap.prototype.insert = function(val){
  // if the heap is empty, just insert it
  if(this.map.length === 1){
    this.map.push(val);
  }else{
    this.map.push(val);
    this.heapifyUp();
  }
};

MinHeap.prototype.heapifyUp = function(){
  let currentIdx = this.map.length-1;

  while(currentIdx > 0){
    const parentIdx = Math.floor(currentIdx/2);
    const parent = this.map[parentIdx];
    const current = this.map[currentIdx];
    
    if(current < parent){
      this.map[parentIdx] = current;
      this.map[currentIdx] = parent;
    }

    currentIdx = parentIdx;
  }
};

MinHeap.prototype.remove = function(val){
  const min = this.map[1];

  if(this.map.length === 1){
    return null;
  }else if(this.map.length === 2){
    return this.map.pop();
  }else{
    this.map[1] = this.map.pop();
    this.heapifyDown();
  }

  return min;
};

MinHeap.prototype.heapifyDown = function(idx){
  let currentIdx = 1;

  while(true){
    const childIdx = currentIdx * 2;
    const sibIdx = childIdx + 1;
    const child = this.map[childIdx];
    const sib = this.map[sibIdx];
    const current = this.map[currentIdx];
    let swapIdx = null;
    
    // if child is smaller than current
    if(child < current) swapIdx = childIdx;

    // if sib is smaller than current and child
    if(sib < current && sib < child) swapIdx = sibIdx;

    // if we don't need to swap we good
    if(swapIdx === null) break;

    // do the swap
    const temp = this.map[currentIdx];
    this.map[currentIdx]= this.map[swapIdx];
    this.map[swapIdx] = temp;

    currentIdx = swapIdx;
  }
};

let minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(5);
// minHeap.insert(6);
// minHeap.insert(2);
// minHeap.insert(1);

console.log(minHeap.map);

minHeap.remove(4);

console.log(minHeap.map);