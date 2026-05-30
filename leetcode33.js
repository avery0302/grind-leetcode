/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid = -1
    let m = 0
    let l = 0
    let r = 0
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        m = nums[mid]
        l = nums[left]
        r = nums[right]
        if (m === target) {
            return mid
        } else if (l <= m) {
            if (target >= l && target < m) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target > m && target <= r) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};