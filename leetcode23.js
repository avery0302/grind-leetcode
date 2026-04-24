/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let dummy = new ListNode()
    let cur = dummy
    let len = lists.length
    let minVal
    let minIdx
    let curVal
    while (true) {
        minVal = undefined
        minIdx = undefined
        for (let i = 0; i < len; i++) {
            if (!lists[i]) {
                continue
            }
            curVal = lists[i].val
            if (minVal === undefined || curVal < minVal) {
                minIdx = i
                minVal = curVal
            }
        }
        if (minVal === undefined) {
            break
        } else {
            cur.next = lists[minIdx]
            cur = cur.next
            lists[minIdx] = lists[minIdx].next
        }
    }
    return dummy.next
};