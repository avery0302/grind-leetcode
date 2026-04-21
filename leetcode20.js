/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let mapping = {')': '(', ']': '[', '}': '{'}
    for (const c of s) {
        if (!mapping[c] || stack.length === 0) {
            stack.push(c)
        } else if (mapping[c] === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return !stack.length
};