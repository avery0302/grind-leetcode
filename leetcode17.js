/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let res = []
    let mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    let len = digits.length

    function trackback(idx, comb) {
        if (idx === len) {
            res.push(comb)
            return
        }
        for (const letter of mapping[digits[idx]]) {
            trackback(idx + 1, `${comb}${letter}`)
        }
    }

    trackback(0, '')
    return res
};

/**
 * 力扣第17题 电话号码的字母组合
 * leetcode problem 17: Letter Combinations of a Phone Number
 * 思路: 本题提供了数字到字母的一对多映射,给定一串数字,要找到所有可能的字母映射
 * approach: this problem provides a mapping from digits to letters, and requires finding all possible letter combinations from the given string
 * 由于数字长度最大为4,所以首先想到四重循环逐层拼接,能够覆盖所有情况
 * the maximum length of the string is 4, so the first idea is to use four nested loops to build combinations, this approach can cover all possible cases
 * 为了精简代码,四重循环可以用递归来代替
 * to simplify the code, we can use a recursive function to replace the four nested loops
 * 代码: 先初始化一个结果数组
 * code: first initialize a result array
 * 参考图片写出数字到字母的映射
 * create the mapping from digits to letters based on the problem description
 * 然后构建递归的基本结构
 * then build the basic structure of a recursive function
 * 增加递归的分支
 * add recursive branches
 * 最后加上递归的终止条件
 * finally add the termination condition
 * 所以这就是全部代码
 * so this is the complete code
 * 看一下结果
 * take a look at the result
 * 完成
 * done
 */