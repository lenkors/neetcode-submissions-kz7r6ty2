class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (!Number.isSafeInteger(s.length / 2)) return false;
        
        const bracketsList = new Map([
            ['}', '{'],
            [')', '('],
            [']', '[']
        ]);

        const stack = [];

        for (const char of s) {
            if (bracketsList.has(char)) {
                const expectedOpen = bracketsList.get(char);
                const lastInStack = stack.pop();
                if (expectedOpen == lastInStack) {
                    continue;
                } else return false
            } else {
                stack.push(char)
            };
        }
        return stack.length === 0;
    }
}
