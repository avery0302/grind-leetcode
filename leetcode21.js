/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode()
    let list3 = dummy
    let val1 = 0
    let val2 = 0
    while (list1 || list2) {
        val1 = list1 ? list1.val : undefined
        val2 = list2 ? list2.val : undefined
        if (val2 === undefined) {
            list3.next = list1
            break
        } else if (val1 === undefined) {
            list3.next = list2
            break
        } else if (val1 <= val2) {
            list3.next = new ListNode(val1)
            list1 = list1.next
            list3 = list3.next
        } else {
            list3.next = new ListNode(val2)
            list2 = list2.next
            list3 = list3.next
        }
    }
    return dummy.next
};