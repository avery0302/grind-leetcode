/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    let res = []
    function addCandidate(start, cur, sum) {
        if (sum === target) {
            res.push(cur)
            return
        }
        for (let i = start; i < candidates.length; i++) {
            let n = candidates[i]
            if (sum + n > target) {
                break
            }
            addCandidate(i, [...cur, n], sum + n)
        }
    }
    addCandidate(0, [], 0)
    return res
};