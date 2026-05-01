/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let max = 0
    let len = s.length
    let stack = [-1]
    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else if (stack.length !== 0 && s[stack[stack.length - 1]] === '(') {
            stack.pop()
            max = Math.max(max, i - stack[stack.length - 1])
        } else {
            stack.push(i)
        }
    }
    return max
};