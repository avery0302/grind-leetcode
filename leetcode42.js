/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let len = height.length
    let leftMax = Array(len).fill(0)
    let rightMax = Array(len).fill(0)
    let max = 0
    for (let i = 0; i < len - 1; i++) {
        max = Math.max(max, height[i])
        leftMax[i + 1] = max
    }
    max = 0
    for (let i = len - 1; i > 0; i--) {
        max = Math.max(max, height[i])
        rightMax[i - 1] = max
    }
    let sum = 0
    for (let i = 1; i < len - 1; i++) {
        let min = Math.min(leftMax[i], rightMax[i])
        let cur = min - height[i]
        if (cur < 0) {
            cur = 0
        }
        sum += cur
    }
    return sum
};