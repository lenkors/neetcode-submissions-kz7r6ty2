class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (let i = 0; i < tokens.length; i++) {
            const parsedNumber = Number(tokens[i]);
            if (!isNaN(parsedNumber)) {
                stack.push(parsedNumber);
            } else {
                const b = stack.pop()!;
                const a = stack.pop()!;

                const res = tokens[i] == '+' ? a + b : (tokens[i] == '-' ? a - b : (tokens[i] == '*' ? a * b : Math.trunc(a/b)));
                stack.push(res)
            }
        }

        return stack[0];
    }
}
