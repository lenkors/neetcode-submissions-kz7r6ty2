class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const list = new Map();
        let left = 0;
        let maxFreq = 0;
        let maxLen = 0;

        for (let right = 0; right < s.length; right++) {
            list.set(s[right], (list.get(s[right]) || 0)+1);

            maxFreq = Math.max(maxFreq, list.get(s[right])!);

            while((right - left + 1) - maxFreq > k) {
                list.set(s[left], list.get(s[left])! - 1);
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen; 
    }
}
