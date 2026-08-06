class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const uniqList = new Set();
        let f = 0;
        let max = 0;

        for (let i = 0; i < s.length; i++) {
            while (uniqList.has(s[i])) {
                uniqList.delete(s[f]);
                f++;
            }

            uniqList.add(s[i]);
            max = Math.max(max, i - f + 1)
        }

        return max;
    }
}
