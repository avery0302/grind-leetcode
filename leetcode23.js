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
    let lists2 = []
    if (lists.length === 0) {
        return null
    }

    while (lists.length > 1) {
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i]
            let l2 = i + 1 < lists.length ? lists[i + 1] : null
            let sum = merge2Lists(l1, l2)
            lists2.push(sum)
        }
        lists = lists2
        lists2 = []
    }

    return lists[lists.length - 1]
};

function merge2Lists(l1, l2) {
    let node = new ListNode()
    let cur = node
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
    return node.next
}