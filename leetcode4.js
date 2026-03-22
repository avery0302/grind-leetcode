/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let len = len1 + len2
    let p1 = 0
    let p2 = 0

    function getMin() {
        if (p1 < len1 && p2 < len2) {
            if (nums1[p1] <= nums2[p2]) {
                return nums1[p1++]
            } else {
                return nums2[p2++]
            }
        } else if (p1 < len1) {
            return nums1[p1++]
        } else if (p2 < len2) {
            return nums2[p2++]
        }
        return -1
    }

    if (len % 2 === 1) {
        let midIdx = Math.floor(len / 2)
        for (let i = 0; i < midIdx; i++) {
            getMin()
        }
        return getMin()
    } else {
        let midIdx2 = len / 2
        let midIdx1 = midIdx2 - 1
        for (let i = 0; i < midIdx1; i++) {
            getMin()
        }
        return (getMin() + getMin()) / 2
    }
};

/*
* 思路:如果不考虑时间复杂度,最简单的方法就是合并,排序,取值
但是排序函数时间复杂度过高,而给的又是两个有序数组
所以直接两个指针,从两个数组中从小到大拿值
代码:数组个数为奇数和偶数时中位数计算方式不同
奇数只需要一个中间元素,偶数需要两个
遍历次数是数组一半的长度
每次遍历要找到两个数组中较小的数值并移动指针
奇数直接返回中间的值,偶数返回中间两个值的平均值
* */