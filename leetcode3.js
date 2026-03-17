/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let len = s.length
    let maxLen = 0
    let left = 0
    let lastSeen = {}
    let c = ''
    for (let right = 0; right < len; right++) {
        c = s[right]
        if (lastSeen[c] !== undefined && lastSeen[c] >= left) {
            left = lastSeen[c] + 1
        }
        lastSeen[c] = right
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
};