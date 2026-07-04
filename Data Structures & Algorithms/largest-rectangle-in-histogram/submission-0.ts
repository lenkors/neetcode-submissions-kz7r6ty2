class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack = [];
        let maxArea = 0;

        for (let i = 0; i <= heights.length; i++) {
            const currentHeight = (i === heights.length) ? 0 : heights[i];
            while (stack.length > 0 && heights[stack[stack.length - 1]] > currentHeight) {
                const h = heights[stack.pop()!];
                const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, h * w);
            }
        
            stack.push(i);
        }
        return maxArea;
    }
}