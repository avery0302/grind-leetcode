/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let res = []
    let len = digits.length
    let mapping = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
    let comb = ''
    for (const letter1 of mapping[digits[0]]) {
        comb = letter1
        if (len > 1) {
            for (const letter2 of mapping[digits[1]]) {
                comb = `${letter1}${letter2}`;
                if (len > 2) {
                    for (const letter3 of mapping[digits[2]]) {
                        comb = `${letter1}${letter2}${letter3}`;
                        if (len > 3) {
                            for (const letter4 of mapping[digits[3]]) {
                                comb = `${letter1}${letter2}${letter3}${letter4}`;
                                res.push(comb)
                            }
                        } else {
                            res.push(comb)
                        }
                    }
                } else {
                    res.push(comb)
                }
            }
        } else {
            res.push(comb)
        }
    }
    return res
};