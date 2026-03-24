/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0
    let end = 0
    let len = s.length

    function expandFromCenter(left, right) {
        while (true) {
            if (left < 0 || right >= len || s[left] !== s[right]) {
                if (right - left > end - start) {
                    start = left
                    end = right
                }
                break
            }
            left--
            right++
        }
    }

    for (let i = 0; i < len; i++) {
        expandFromCenter(i, i)
        expandFromCenter(i, i + 1)
    }
    return s.slice(start + 1, end)
};

/**
 力扣第5题: 最长回文子串
 思路: 寻找回文子串关键在于从中间向两边找
 但是中心可能是一个字符也可能是两个字符,所以分情况讨论
 代码: 唯一确定子串需要两个指针
 遍历整个字符串作为子串的中心
 新建方法,中心为一个字符和中心为两个字符时传入不同参数
 从中心向两边膨胀,设置终止条件
 终止时如果当前为最长子串,则记录指针位置
 所以这就是全部代码
 看一下结果
 完成
 **/