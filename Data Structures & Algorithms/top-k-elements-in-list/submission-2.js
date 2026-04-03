class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (k == nums.length) return nums;

        const list = new Map();

        for (const el of nums) {
            if (list.has(el)) list.set(el, (list.get(el) || 0)+1);
            else list.set(el, 1)
        }
        const result = [...list.entries()]
        .sort((a,b) => b[1] - a[1])
        .slice(0, k)
        .map(elem => elem[0]);

        return result;
    }
}
