class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const list = new Map();

        for (let i of strs) {
            const counter = new Array(26).fill(0);

            for (let symb of i) {
                let index = symb.charCodeAt(0) -97;
                counter[index]++;
            }
        const key = counter.join(',');

        if (!list.has(key)) list.set(key, []);
        list.get(key).push(i)
        }
        return Array.from(list.values());
    }
}
