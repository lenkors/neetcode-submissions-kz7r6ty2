class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = 0;
        let rightMax = 0;

        let areaOfWater = 0;

        let left = 0;
        let right = height.length - 1;

        while (left < right) {
            if (height[left] <= height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    areaOfWater += leftMax - height[left]
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    areaOfWater += rightMax - height[right];;
                }
                right--;
            } 
        }

        return areaOfWater;
    }
}
