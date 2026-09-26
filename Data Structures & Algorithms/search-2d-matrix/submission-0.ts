class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let top = 0;
        let bottom = matrix.length - 1;
        let midRow:number;

        while (top <= bottom) {
            midRow = Math.floor((top + bottom) / 2);
            let n = matrix[midRow].length

            if (target < matrix[midRow][0]) {
                bottom = midRow - 1;
            } else if (target > matrix[midRow][n - 1]) {
                top = midRow + 1;
            } else {
                let left = 0;
                let right = n - 1;
                let nums = matrix[midRow];

                while (left <= right) {
                    let mid = Math.floor((left + right) / 2);
                    if (nums[mid] == target) return true;
                    else if (nums[mid] < target) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
                return false;
            }
        }
        return false;
    }
}
