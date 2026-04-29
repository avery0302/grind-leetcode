/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length
    if (len === 1) {
        return
    }
    let m = -1
    let n = -1
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            m = i
            break
        }
    }
    if (m >= 0) {
        for (let i = len - 1; i > m; i--) {
            if (nums[i] > nums[m]) {
                n = i
                break
            }
        }
        [nums[m], nums[n]] = [nums[n], nums[m]]
    }
    let j = m + 1
    let k = len - 1
    while (j < k) {
        [nums[j], nums[k]] = [nums[k], nums[j]]
        j++
        k--
    }
};