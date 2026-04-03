class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (Array.isArray(nums) && Number.isInteger(target)) {
            const list = new Map();

            for (let i = 0; i <= nums.length -1; i++) {
                let operated = target - nums[i];

                if (list.has(operated)) return [i, list.get(operated)];

                list.set(nums[i], i)
            }

            return null
        }

        throw new Error('Payload in corrupted')
    }
}
