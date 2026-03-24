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