function MaxHeap(){
  this.map = [null];
}

MaxHeap.prototype.insert = function(val){
  if(this.map.length === 1){
    return this.map.push(val);
  }else{
    this.map.push(val);
    this.heapifyUp();
  }
};

MaxHeap.prototype.heapifyUp = function(){
  let currentIdx = this.map.length-1;

  while(currentIdx > 1){ // don't swap with first null element
    const parentIdx = Math.floor(currentIdx/2);
    const parent = this.map[parentIdx];
    const current = this.map[currentIdx];

    // if current is larger than parent, swap
    if(current > parent){
      this.map[currentIdx] = parent;
      this.map[parentIdx] = current;
    }

    // keep going up
    currentIdx = parentIdx;
  }
};

MaxHeap.prototype.remove = function() {
  const max = this.map[1];

  if(this.map.length === 2){ // when there is only one node in the heap
    return this.map.pop();
  }else{
    this.map[1] = this.map.pop();
    this.heapifyDown();
  }

  return max;
};

MaxHeap.prototype.heapifyDown = function(){
  let currentIdx = 1;

  while(true){
    const childIdx = currentIdx * 2;
    const sibIdx = currentIdx + 1;
    const child = this.map[childIdx];
    const sib = this.map[sibIdx];
    const current = this.map[currentIdx];
    let swapIdx = null;

    // if child is larger than current try to swap
    if(child > current) swapIdx = childIdx;

    // if sib is larger than current and child
    if(sib > current && sib > child) swapIdx = sibIdx;

    // if nothing to swap then we finished
    if(swapIdx === null) break;

    // swap
    const temp = this.map[currentIdx];
    this.map[currentIdx] = this.map[swapIdx];
    this.map[swapIdx] = temp;

    currentIdx = swapIdx;
  }
};

let maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);

console.log(maxHeap.map);

maxHeap.remove();

console.log(maxHeap.map);