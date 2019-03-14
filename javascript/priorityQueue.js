function Node(value, priority){
  this.value = value;
  this.priority = priority;
  this.next = null;
}

function PriorityQueue(){
  this.first = null;
}

PriorityQueue.prototype.insert = function(value, priority){
  const newNode = new Node(value, priority);
  if (!this.first || priority > this.first.priority) {
    newNode.next = this.first;
    this.first = newNode;
  } else {
    let pointer = this.first;
    while (pointer.next && priority < pointer.next.priority) {
      pointer = pointer.next;
    }
    newNode.next = pointer.next;
    pointer.next = newNode;
  }
};

let pq = new PriorityQueue();
pq.insert(1, 1);

class Heap {
  constructor() {
    this.heap = [null]
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    this.heap.push(newNode);
    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    while (
      this.heap[currentNodeParentIdx] &&
      newNode.priority > this.heap[currentNodeParentIdx].priority
    ) {
      const parent = this.heap[currentNodeParentIdx];
      this.heap[currentNodeParentIdx] = newNode;
      this.heap[currentNodeIdx] = parent;
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

}

let heap = new Heap();
heap.insert(1, 1);
heap.insert(1, 2);
console.log(heap);