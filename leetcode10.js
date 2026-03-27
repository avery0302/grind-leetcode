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