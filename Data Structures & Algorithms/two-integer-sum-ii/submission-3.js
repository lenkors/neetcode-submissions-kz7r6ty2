class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length-1;

        const result = [];

        while (left < right) {
            const summ = numbers[left] + numbers[right]; 
            if (summ == target) {
                result.push(left+1, right+1);
                break;
            }

            if (summ > target) {
                right--;
            } else {
                left++;
            }
        }

        return result;
    }
}
