/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let mapping = {')': '(', ']': '[', '}': '{'}
    for (const char of s) {
        if (!mapping[char] || stack.length === 0) {
            stack.push(char)
        } else if (mapping[char] === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return !stack.length
};