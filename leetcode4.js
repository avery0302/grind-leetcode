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
力扣第4题:寻找两个有序数组的中位数
the 4th problem on leetcode: median of two sorted arrays
思路:如果不考虑时间复杂度,最简单的方法就是合并,排序,取值
approach: if we dont consider the time complexity, the easiest way is to merge, sort and get the value
但是排序函数时间复杂度过高,而给的又是两个有序数组
but the sort function has a high time complexity, while we've already had two sorted arrays
所以直接两个指针,从两个数组中从小到大拿值
so we create two pointers to get the value from the two arrays by order
代码:数组个数为奇数和偶数时中位数计算方式不同
code: the calculations of the median is different when the mount of the array is odd or even
奇数只需要一个中间元素,偶数需要两个
odd array has one middle element, while even array has two middle elements
遍历次数是数组一半的长度
the times of iteration is half of length of the array
每次遍历要找到两个数组中较小的数值并移动指针
find the smaller value of the two arrays and move the pointers every iteration
奇数直接返回中间的值,偶数返回中间两个值的平均值
odd condition returns the middle element, while even condition returns the average of the two middle elements
所以这就是全部代码
so this is the complete code
看一下结果
take a look at the result
完成
done
* */