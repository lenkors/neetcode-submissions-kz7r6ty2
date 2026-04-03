class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueNums = new Set(nums);
        let longest = 0;

        for (const num of uniqueNums) {
            if (!uniqueNums.has(num - 1)) {
                let i = 1;

                while (uniqueNums.has(num+i)) {
                    i += 1
                }

                longest = Math.max(longest, i)
            }
        }

        return longest;
    }
}
