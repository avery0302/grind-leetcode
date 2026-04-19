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

/**
 * 力扣19题: 删除链表的倒数第N个结点
 * 思路: 本题要求只遍历一次,删除链表的倒数第n个节点
 * 由于链表只能从前到后遍历,并且链表长度未知,一个指针需要遍历两次才能找到对应节点
 * 所以我们用两个间隔n的指针一起遍历
 * 链表类问题为防止丢失头节点统一创建-1节点
 * 代码: 首先创建-1节点,返回结果就是该节点的next
 * 创建左右指针
 * 右指针先移动n的距离
 * 然后左右指针一起移动,直到右指针抵达末尾
 * 移除倒数第n个节点
 * 这就是全部代码
 * 看一下结果
 * 完成
 */