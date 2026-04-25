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
    let temp = []
    if (lists.length === 0) {
        return null
    }
    while (lists.length > 1) {
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i]
            let l2 = i + 1 < lists.length ? lists[i + 1] : null
            let sum = merge2Lists(l1, l2)
            temp.push(sum)
        }
        lists = temp
        temp = []
    }
    return lists[0]
};

function merge2Lists(l1, l2) {
    let dummy = new ListNode()
    let cur = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = l1 || l2
    return dummy.next
}