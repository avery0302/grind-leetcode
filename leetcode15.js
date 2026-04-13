/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = []
    let len = nums.length
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) {
            break
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        for (let j = i + 1; j < len - 1; j++) {
            if (nums[i] + nums[j] > 0) {
                break
            }
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }
            for (let k = j + 1; k < len; k++) {
                if (nums[i] + nums[j] + nums[k] > 0) {
                    break
                }
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]])
                    break
                }
            }
        }
    }
    return result
};