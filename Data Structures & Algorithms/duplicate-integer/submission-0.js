class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (Array.isArray(nums)) {
            return new Set(nums).size !== nums.length
        }
        return false;
    }
}
