class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const width = right - left;
            const currentHeight = Math.min(heights[left], heights[right]);
            const area = width * currentHeight;

            maxArea = Math.max(area, maxArea);

            if (heights[left] > heights[right]) right--;
            else if (heights[left] < heights[right]) left++;
            else left++;
        }

        return maxArea;
    }
}
