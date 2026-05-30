/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let leftIdx = 0
    let rightIdx = nums.length - 1
    let midIdx = -1
    let left = 0
    let right = 0
    let mid = 0
    while (leftIdx <= rightIdx) {
        midIdx = Math.floor((leftIdx + rightIdx) / 2)
        left = nums[leftIdx]
        right = nums[rightIdx]
        mid = nums[midIdx]
        if (mid === target) {
            return midIdx
        } else if (left <= mid) {
            if (target >= left && target < mid) {
                rightIdx = midIdx - 1
            } else {
                leftIdx = midIdx + 1
            }
        } else {
            if (target > mid && target <= right) {
                leftIdx = midIdx + 1
            } else {
                rightIdx = midIdx - 1
            }
        }
    }
    return -1
};