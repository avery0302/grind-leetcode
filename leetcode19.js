/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let res = new ListNode(0, head)
    let left = res
    let right = res
    for (let i = 0; i < n; i++) {
        right = right.next
    }
    while (right.next !== null) {
        left = left.next
        right = right.next
    }
    left.next = left.next.next
    return res.next
};