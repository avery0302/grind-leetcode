/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0
    let curArea = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        curArea = (right - left) * Math.min(height[left], height[right])
        maxArea = Math.max(maxArea, curArea)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};