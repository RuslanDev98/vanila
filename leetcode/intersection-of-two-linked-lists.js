/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let map = new Map()
  while (headA) {
      map.set(headA, headA)
      headA = headA?.next
  }

  while (headB) {
      if (map.get(headB)) {
          return headB
      }
      headB = headB?.next
  }
  
  return null
};