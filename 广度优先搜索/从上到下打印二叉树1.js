
// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function(root) {
    if(root === null) return [];
    let q = [root], arr= [];
    while(q.length) {
        const node = q.shift();
        node.left && q.push(node.left);
        node.right && q.push(node.right);
        arr.push(node.val)
    }
    return arr
};