class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const array = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
        const wordsForward = new Map();
        const wordsBackward = new Map();

        let backI = array.length-1;

        for (let i = 0; i < array.length; i++) {
            if (array[i] == array[backI-i]) {
                wordsBackward.set(array[backI-i], backI-i);
                wordsForward.set(array[i], i)
                if (i+1 == backI-i) {
                    return true
                }    
            } else {
                return false;
            }
        }
    return true;
    }
}
