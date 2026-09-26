/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;
        let lastMaxLeft = 0;
        let lastMaxRight = 0;

        lastMaxLeft = this.maxDepth(root.left) 
        lastMaxRight = this.maxDepth(root.right)

        return Math.max(lastMaxLeft, lastMaxRight)+1;
    }
}
