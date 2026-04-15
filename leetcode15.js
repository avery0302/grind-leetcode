/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = []
    let len = nums.length
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) {
            break
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let j = i + 1
        let k = len - 1
        while (j < k) {
            let total = nums[i] + nums[j] + nums[k]
            if (nums[i] + nums[j] > 0 || nums[k] < 0) {
                break
            }
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                j++
                continue
            }
            if (k < len - 1 && nums[k] === nums[k + 1]) {
                k--
                continue
            }
            if (total === 0) {
                res.push([nums[i], nums[j], nums[k]])
                j++
                k--
            } else if (total < 0) {
                j++
            } else {
                k--
            }
        }
    }
    return res
};