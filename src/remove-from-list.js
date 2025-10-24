const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l

  while(head.value && head.value=== k) {
    head = head.next
  }

  if (!head) return null;

  let current = head

  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}

module.exports = {
  removeKFromList
};
