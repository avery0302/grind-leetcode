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
 * 力扣17 电话号码的字母组合
 * 思路: 本题提供了数字到字母的一对多映射,给定一串数字,要找到所有可能的字母映射
 * 由于数字长度最大为4,所以首先想到四重循环逐层拼接,能够覆盖所有情况
 * 为了精简代码,四重循环可以用递归来代替
 * 代码: 先初始化一个结果数组
 * 参考图片写出数字到字母的映射
 * 然后构建递归的基本结构
 * 增加递归的分支
 * 最后加上递归的终止条件
 * 所以这就是全部代码
 * 看一下结果
 * 完成
 */