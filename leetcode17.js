/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let res = []
    let len = digits.length
    let mapping = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}

    function backtrack(idx, comb) {
        if (idx === len) {
            res.push(comb)
            return
        }
        for (const letter of mapping[digits[idx]]) {
            backtrack(idx + 1, `${comb}${letter}`)
        }
    }

    backtrack(0, '')
    return res
};