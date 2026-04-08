class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        let left = 0;
        const result = [];

        for (let i = 0; i < sortedNums.length; i++) {
            if (i > 0 && sortedNums[i] == sortedNums[i-1]) continue;
            left = i + 1;
            let right = nums.length -1;
            while (left < right) {
                const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
                if (sum == 0) {
                    result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                    left++;
                    right--;
                    while (left < right && sortedNums[left] === sortedNums[left - 1]) left++;
                    while (left < right && sortedNums[right] === sortedNums[right + 1]) right--;
                } else if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                }
            }
        }

        return result;
    }
}
