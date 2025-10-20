/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode()
  let current = dummy
  let carry = 0
  while (l1 || l2 || carry) {
      let sum = (l1?.val || 0) + (l2?.val || 0) + carry
      carry = Math.floor(sum / 10)
      let rest = sum % 10

      current.val = rest

      l1 = l1?.next
      l2 = l2?.next
      
      if (l1 || l2 || carry) {
          current.next = new ListNode()
          current = current.next
      }
  }

  return dummy
};