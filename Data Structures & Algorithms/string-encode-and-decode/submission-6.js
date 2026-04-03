class Solution {

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';

        for (const el of strs) {
            result += `${el.length}#${el}`;
        };
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = str.indexOf('#', i);

            let wordLen = parseInt(str.substring(i, j));
            i = j+1;
            result.push(str.substring(i, i + wordLen));
            i += wordLen;
        }

        return result;
    }
}
