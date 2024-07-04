/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  //TODO: use LinkedList instead
  return head.slice(Math.floor(6 / 2) - 1, head.length);
};


console.log(middleNode([1, 2, 3, 4, 5]));
