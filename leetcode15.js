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
 * 思路: 这道题要求找出数组中所有和为0的三元组
 * 首先想到三重循环,三个指针能遍历所有三元组情况
 * 为了降低时间复杂度,可以让第二个和第三个指针相对而行
 * 为了拥有前进条件,数组必须是有序的
 * 代码: 先创建返回的结果数组
 * 将给定数组排序
 * 开始遍历数组,第一个指针从头开始
 * 第二,三个指针遍历其余部分,相对而行
 * 如果和为0,则将三元组加入结果数组
 * 否则移动对应指针
 * 去除所有重复结果
 * 这就是全部代码
 * 看一下结果
 * 完成
 */