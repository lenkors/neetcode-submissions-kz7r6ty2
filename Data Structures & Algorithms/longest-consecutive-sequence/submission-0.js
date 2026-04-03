class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const uniqueNums = new Set(nums);
        let longest = 0;

        for (const num of uniqueNums) {
            if (!uniqueNums.has(num - 1)) {

                let currentNum = num;
                let i = 1;

                while (uniqueNums.has(currentNum+1)) {
                    currentNum += 1
                    i += 1
                }

                if (i > longest) {
                    longest = i;
                }
            }
        }

        return longest;
    }
}
