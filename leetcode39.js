/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []
    candidates.sort((a, b) => a - b)
    function addCandidate(cur, sum, start) {
        if (sum > target) {
            return
        }
        if (sum === target) {
            res.push(cur)
            return
        }
        for (let i = start; i < candidates.length; i++) {
            let n = candidates[i]
            if (sum + n > target) {
                break
            }
            addCandidate([...cur, n], sum + n, i)
        }
    }
    addCandidate([], 0, 0)
    return res
};