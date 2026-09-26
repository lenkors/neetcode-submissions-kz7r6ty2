class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let result = -1;
        let left = 0;
        let right = nums.length - 1;
        let mid: number;

        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (nums[mid] == target) return result = mid;
            else if (nums[mid] < target) {
                left = mid + 1;
            } 
            else if (nums[mid] > target) {
                right = mid - 1;
            }
        }

        return result;
    }
}
