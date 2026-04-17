/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
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
            let total = nums[i] + nums[j] + nums[k]
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

/**
 * 力扣第15题 三数之和
 * leetcode problem 15: 3 Sum
 * 思路: 这道题要求找出数组中所有和为0的三元组
 * approach: this problem requires finding all triplets adding up to 0 in this array
 * 首先想到三重循环,三个指针能遍历所有三元组情况
 * the first idea is triple nested loops, since three pointers can iterate all the triplets cases
 * 为了降低时间复杂度,可以让第二个和第三个指针相对而行
 * in order to decrease the time complexity, we can move the second and third pointers to each other
 * 为了拥有前进条件,数组必须是有序的
 * in order to have a condition to move forward, the array must be in order
 * 代码: 先创建返回的结果数组
 * code: first create a result array
 * 将给定数组排序
 * sort the given array in order
 * 开始遍历数组,第一个指针从头开始
 * iterate the array and the first pointer starts from the index 0
 * 第二,三个指针遍历其余部分,相对而行
 * the second and third pointers iterate the remaining by moving to each other
 * 如果和为0,则将三元组加入结果数组
 * if the total equals 0, we'll put the triplets in the result array
 * 否则移动对应指针
 * otherwise move the corresponding pointer
 * 去除所有重复结果
 * remove all the repeating results
 * 这就是全部代码
 * so this is the complete code
 * 看一下结果
 * take a look at the result
 * 完成
 * done
 */