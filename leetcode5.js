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
 the 5th problem on leetcode: longest palindromic substring
 思路: 寻找回文子串关键在于从中间向两边找
 approach: the key to find a palindromic substring is looking for it from the center to the ends
 但是中心可能是一个字符也可能是两个字符,所以分情况讨论
 but the center maybe one character or two, so we need an if
 代码: 唯一确定子串需要两个指针
 code: slicing a substring needs two pointers
 遍历整个字符串作为子串的中心
 iterate the whole string to get the center of the substring
 新建方法,中心为一个字符和中心为两个字符时传入不同参数
 create a function, delivery different parameters when the center is one character or two
 从中心向两边膨胀,设置终止条件
 expand the length from the center and set an end condition
 终止时如果当前为最长子串,则记录指针位置
 save the two pointers at the end of the loop if current substring is longest
 所以这就是全部代码
 so this is the complete code
 看一下结果
 take a look at the result
 完成
 done
 **/