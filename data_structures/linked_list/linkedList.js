function Node(val){
  this.val = val;
  this.next = null;
  this.prev = null;
}

function LinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.initialize = function(val){
  const node = new Node(val);

  this.head = new Node(null);
  this.tail = new Node(null);
  this.head.next = node;
  this.tail.prev = node;
  node.next = this.tail;
  node.prev = this.head;
  this.length = 1;
};

LinkedList.prototype.insertToHead = function(val) {
  if(this.head){
    const node = new Node(val);
    const temp = this.head.next;
    node.next = temp;
    temp.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.length++;
    return;
  }

  this.initialize(val);
};

LinkedList.prototype.insertToTail = function(val){
  if(this.tail){
    const node = new Node(val);
    const temp = this.tail.prev;
    node.prev = temp;
    temp.next = node;
    this.tail.prev = node;
    node.next = this.tail;
    this.length++;
    return;
  }

  this.initialize(val);
};

LinkedList.prototype.toArray = function(){
  let array = [];
  let current = this.head.next;
  while(current.val !== null){
    array.push(current.val);
    current = current.next;
  }

  return array;
};

LinkedList.prototype.removeNode = function(val) {
  if(!this.head) return null;

  let current = this.head.next;
  while(current.val !== null){
    if(current.val === val){
      const temp = current.prev;
      temp.next = current.next;
      current.next.prev = temp;
    }
    current = current.next;
  }

  return null;
};

LinkedList.prototype.lastNNodes = function(n) {
  if(!this.head) return 0;

  let array = [];
  let current = this.tail.prev;
  while(n > 0 && current.val !== null){
    array.unshift(current.val);
    current = current.prev;
    n--;
  }

  return array;
};

const list = new LinkedList();
list.insertToHead(1);
list.insertToHead(2);
list.insertToHead(3);
list.insertToTail(4);
// list.removeNode(4);
// list.removeNode(2);

const printList = list.toArray();
console.log('Nodes', printList);
console.log('Length: ', list.length);
console.log('Last N Nodes: ', list.lastNNodes(3));