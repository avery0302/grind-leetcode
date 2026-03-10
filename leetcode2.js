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
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0)
    let cur = dummyHead
    let carry = 0
    let x = 0
    let y = 0
    let sum = 0
    let val = 0
    while (l1 !== null || l2 !== null || carry !== 0) {
        x = l1 ? l1.val : 0
        y = l2 ? l2.val : 0
        sum = x + y + carry
        carry = Math.floor(sum / 10)
        val = sum % 10
        cur.next = new ListNode(val)
        cur = cur.next
        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
    }
    return dummyHead.next

};