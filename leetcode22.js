/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = []

    function backtrack(s, left, right) {
        if (left === 0 && right === 0) {
            res.push(s)
            return
        }
        if (left > 0) {
            backtrack(`${s}(`, left - 1, right)
        }
        if (right > 0 && right > left) {
            backtrack(`${s})`, left, right - 1)
        }
    }
    backtrack('', n, n)

    return res
};