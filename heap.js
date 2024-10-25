class Minheap {
  constructor(arr) {
    this.heap = [...arr];
    // start at the end of the array (at the last non-leaf),
    // heapify each subtree
    for (
      let index = Math.floor(this.heap.length / 2) - 1;
      index >= 0;
      index--
    ) {
      this.#heapify(index);
    }
  }

  #heapify(index) {
    // heapify needs to make sure this node is the min compared to its own
    // children
    let min = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    // Is either child node smaller than the parent?
    if (left < this.heap.length && this.heap.left < this.heap[min]) {
      min = left;
    }
    if (right < this.heap.length && this.heap.right < this.heap[min]) {
      min = right;
    }

    // Do we need to swap?
    if (min != index) {
      [this.heap(min), this.heap[index]] - [this.heap[idex], this.heap[min]];
    }
  }
}
