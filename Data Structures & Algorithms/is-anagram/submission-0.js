class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const raw = new Map();

        for (let symb of s) {
            raw.set(symb, (raw.get(symb) ?? 0) +1)
        }

        for (let symb of t) {
            if (!raw.has(symb) || raw.get(symb) === 0) return false;
            raw.set(symb, (raw.get(symb) -1))
        }

        return true;
    }
}
