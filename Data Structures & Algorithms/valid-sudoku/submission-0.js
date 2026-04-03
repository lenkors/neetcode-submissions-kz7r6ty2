class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set());
        const cols = Array.from({length: 9}, () => new Set());
        const boxes = Array.from({length: 9}, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const currentVal = board[r][c];
                const currentBox = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (currentVal == '.') continue;
                if (!rows[r].has(currentVal) && !cols[c].has(currentVal) && !boxes[currentBox].has(currentVal)) {
                    boxes[currentBox].add(currentVal);
                    rows[r].add(currentVal);
                    cols[c].add(currentVal);
                    continue;
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}
