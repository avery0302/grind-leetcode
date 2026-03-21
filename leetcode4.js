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