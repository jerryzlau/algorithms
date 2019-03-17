/* Initialize LRU cache with default limit being 10 items */
function Node(key, val){
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}

function LRUCache(limit) {
  this.size = 0;
  this.map = {};
  this.head = null;
  this.tail = null;
  this.limit = limit;
}

/* Change or add a new val in the cache
 * We overwrite the entry if it already exists
 */
LRUCache.prototype.set = function (key, val) {
  var node = new Node(key, val);

  /**
   * if the key already exist
   * udpate the incoming value of the key
   * remove the old key/value node
   */
  if (this.map[key]) {
    // this.map[key].val = node.val;
    this.removeNode(node.key);
  } else {
    /**
     * if we hit capacity, remove the last node of the linkedList
     */
    if (this.size >= this.limit) {
      delete this.map[this.tail.key];
      this.size--;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  this.enqueue(node);
};

LRUCache.prototype.enqueue = function (node) {
  node.next = this.head;
  node.prev = null;
  if (this.head !== null) {
    this.head.prev = node;
  }
  this.head = node;

  /**
   * if tail doesn't exist
   * tail = head
   */
  if (this.tail === null) {
    this.tail = node;
  }

  /**
   * update node information in map
   */
  this.size++;
  this.map[node.key] = node;
};

/* Retrieve a single entry from the cache */
LRUCache.prototype.get = function (key) {
  /**
   * if key is found
   */
  if (this.map[key]) {
    var val = this.map[key].val;
    var node = new Node(key, val);
    /** reposition the node in the queue */
    this.removeNode(key);
    this.enqueue(node);
    return val;
  } else {
    console.log("Key " + key + " does not exist in the cache.");
  }
};

/* Remove a single entry from the cache */
LRUCache.prototype.removeNode = function (key) {
  var node = this.map[key];

  /**
   * if node.prev is null, that means node is the head
   * then we want to remove itself by setting this.head as the node after
   */
  if (node.prev !== null) {
    node.prev.next = node.next;
  } else {
    this.head = node.next;
  }

  /**
   * if node.next is null, that means node is the tail
   * then we want to remove itself by setting this.tail as the node before
   */
  if (node.next !== null) {
    node.next.prev = node.prev;
  } else {
    this.tail = node.prev;
  }

  /**
   * Update node's existance in map and size
   */
  delete this.map[key];
  this.size--;
};

/* Resets the entire cache - Argument limit is optional to be reset */
LRUCache.prototype.reset = function (limit) {
  this.size = 0;
  this.map = {};
  this.head = null;
  this.tail = null;
  this.limit = limit;
};

/* Traverse through the cache elements using a callback function
 * Returns args [node element, element number, cache instance] for the callback function to use
 */
LRUCache.prototype.forEach = function (callback) {
  var node = this.head;
  var i = 0;
  while (node) {
    callback.apply(this, [node, i, this]);
    i++;
    node = node.next;
  }
};

/* Returns a JSON representation of the cache */
LRUCache.prototype.toJSON = function () {
  var json = [];
  var node = this.head;
  while (node) {
    json.push({
      key: node.key,
      val: node.val
    });
    node = node.next;
  }
  return json;
};

/* Returns a String representation of the cache */
LRUCache.prototype.toString = function () {
  var s = '';
  var node = this.head;
  while (node) {
    s += String(node.key) + ':' + node.val;
    node = node.next;
    if (node) {
      s += '\n';
    }
  }
  return s;
};

let cache = new LRUCache(5);

cache.set(1, {
  name: 'Jerry',
  age: 24
});

cache.set(2, {
  name: 'Maple',
  age: 24
});

cache.set(2, {
  name: 'Maple Law',
  age: 24
});

cache.get(1);
cache.removeNode(1);

let ans = cache.toJSON();
console.log(ans);