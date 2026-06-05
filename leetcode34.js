/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let len = nums.length
    let result = [-1, -1]
    if (len === 0 || target < nums[0] || target > nums[len - 1]) {
        return result
    }
    let left = 0
    let right = len - 1
    let mid = -1
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            break
        } else if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        }
    }

    if (nums[mid] === target && nums[mid - 1] !== target) {
        result[0] = mid
    } else {
        let left1 = left
        let right1 = mid - 1
        let mid1 = -1
        while (left1 <= right1) {
            mid1 = Math.floor((left1 + right1) / 2)
            if (nums[mid1] === target && nums[mid1 - 1] !== target) {
                result[0] = mid1
                break
            } else if (nums[mid1] === target && nums[mid1 - 1] === target) {
                right1 = mid1 - 1
            } else {
                left1 = mid1 + 1
            }
        }
    }

    if (nums[mid] === target && nums[mid + 1] !== target) {
        result[1] = mid
    } else {
        let left2 = mid + 1
        let right2 = right
        let mid2 = -1
        while (left2 <= right2) {
            mid2 = Math.floor((left2 + right2) / 2)
            if (nums[mid2] === target && nums[mid2 + 1] !== target) {
                result[1] = mid2
                break
            } else if (nums[mid2] === target && nums[mid2 + 1] === target) {
                left2 = mid2 + 1
            } else {
                right2 = mid2 - 1
            }
        }
    }
    return result
};

searchRange([5, 7, 7, 8, 8, 10], 8)