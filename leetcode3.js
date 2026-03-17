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

/**
 the 3rd problem on leetcode: longest substring without repeating characters
 approach: this problem asks for the length of the longest substring of a given string
 first, think of the sliding window approach, so we need a nested loop and a character map
 then store the index of the right pointer to avoid an extra loop
 code: first, use the right pointer to traverse the whole string
 the max length is the window size between the left and right pointers
 to ensure no repetition, the left pointer moves to the next position after the last seen position of the character
 update the character map
 adjust the order of the code lines
 update the max length
 so this is the complete code
 take a look at the result
 done
 **/

