/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let len = nums.length
    if (len === 0 || target < nums[0] || target > nums[len - 1]) {
        return [-1, -1]
    }

    function findBoundry(dir) {
        let left = 0
        let right = len - 1
        let mid = -1
        let boundry = -1
        while (left <= right) {
            mid = Math.floor((left + right) / 2)
            if (nums[mid] < target) {
                left = mid + 1
            } else if (nums[mid] > target) {
                right = mid - 1
            } else if (nums[mid] === target) {
                boundry = mid
                if (dir === 'left') {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }
        return boundry
    }

    let leftBoundry = findBoundry('left')
    let rightBoundry = findBoundry('right')

    return [leftBoundry, rightBoundry]

};