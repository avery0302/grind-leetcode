/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let sLen = s.length
    let pLen = p.length
    let dp = Array(sLen + 1).fill(0).map(() => Array(pLen + 1).fill(false))
    dp[0][0] = true
    for (let n = 2; n < pLen + 1; n++) {
        let j = n - 1
        if (p[j] === '*') {
            dp[0][n] = dp[0][n - 2]
        }
    }
    for (let m = 1; m < sLen + 1; m++) {
        for (let n = 1; n < pLen + 1; n++) {
            let i = m - 1
            let j = n - 1
            if (p[j] === s[i] || p[j] === '.') {
                dp[m][n] = dp[m - 1][n - 1]
            } else if (p[j] === '*') {
                dp[m][n] = dp[m][n] || dp[m][n - 2]
                if (p[j - 1] === s[i] || p[j - 1] === '.') {
                    dp[m][n] = dp[m][n] || dp[m - 1][n]
                }
            }
        }
    }
    return dp[sLen][pLen]
};
/**
 * leetcode第10题:正则表达式匹配
 * 思路:两个字符串互相匹配,首先要想到双指针
 * 但是双指针前进是需要条件判断的
 * 本题中星号可以匹配任意数量的字符,导致没有准确的条件来让指针前进
 * 所以进一步考虑动态规划,前进和不前进的状态都记录下来
 * 代码:返回结果是DP二维表的最后一个元素,代表两个字符串的指针都走到最后一位的匹配状态
 * 二维表需要额外增加抽象的首行和首列,来比较两个字符串都为空时的匹配状态
 * DP二维表的值要分为三部份填充,分为是DP零零,首行首列,和其余部份
 * 用具体的字符串举例,通过填充规律来推断状态转移方程
 * 务必要列出所有可能的情况
 * 这就是全部代码
 * 看一下结果
 * 完成
 */