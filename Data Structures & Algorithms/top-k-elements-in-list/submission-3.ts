class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hash = new Map<number, number>();
        const sortedHash: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        const result: number[] = [];
        
        for (let i = 0; i < nums.length; i++) {
            hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
        }

        hash.forEach((count, num) => {
            sortedHash[count].push(num);
        });

        for (let i = sortedHash.length - 1; i >= 0; i--) {
            for (const num of sortedHash[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
