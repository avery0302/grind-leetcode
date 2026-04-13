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

/**
 * 力扣第11题:盛最多水的容器
 * leetcode problem 11: Container With Most Water
 * 思路:这道题需要从数组中选择两个元素,围成最大的面积
 * approach: this problem needs two elements from the array to form the max area
 * 第一想法是二重循环,比较所有情况的面积大小
 * the first idea is to use the nested loop, then compare the area of all the conditions
 * 为了降低时间复杂度,可以让两个指针从两端开始
 * in order to reduce the time complexity, make the two pointers start from the two end
 * 前进的指针是高度更小的那个,因为宽度已经减少,高度必须增加才有可能找到更大的面积
 * make the lower-height pointer move forward, since the width has become smaller, it's only possible to find a larger area when increasing the height
 * 代码:返回的结果是最大面积
 * code: the result is max area
 * 遍历高度数组,终止条件是左右指针相遇
 * iterate the height array and the termination condition is meeting of both pointers
 * 记录最大面积
 * record the max area
 * 比较高度并移动对应指针
 * compare the height and move the correct pointer
 * 这就是全部代码
 * so this is the complete code
 * 看一下结果
 * take a look at the result
 * 完成
 * done
 */