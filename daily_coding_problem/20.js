/**
 * This problem was asked by Google.

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
 */

function Node(val){
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(){
  this.head = null;
}

SinglyLinkedList.prototype.insertToHead = function(val){
  const node = new Node(val);

  if(this.head === null){
    this.head = node;
  }else{
    const temp = this.head;
    this.head = node;
    this.head.next = temp;
  }
};

SinglyLinkedList.prototype.toArray = function(){
  if(this.head === null) return null;
  let array = [];
  let current = this.head;

  while(current !== null){
    array.push(current.val);
    current = current.next;
  }

  return array;
};

SinglyLinkedList.prototype.headVal = function(){
  if(this.head === null) return null;
  return this.head.val;
};

const listA = new SinglyLinkedList();
listA.insertToHead(10);
listA.insertToHead(8);
listA.insertToHead(7);
listA.insertToHead(3);

const listB = new SinglyLinkedList();
listB.insertToHead(10);
listB.insertToHead(8);
listB.insertToHead(1);
listB.insertToHead(99);

function findIntersect(A, B){
  if(A.head === null || B.head === null) return null;

  let currentA = A.head;
  let currentB = B.head;
  let ans;
  while(currentA !== null && currentB !== null){
    if(currentA.val === currentB.val){
      ans = currentA.val;
      break;
    }

    currentA = currentA.next;
    currentB = currentB.next;
  }

  return ans;
}

let result = findIntersect(listA, listB);
console.log(result);