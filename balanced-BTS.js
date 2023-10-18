// Given a sorted array. Write a function that creates a Balanced Binary Search Tree using array elements.

// EXAMPLE
// Input: arr[] = {1, 2, 3}
// Output: A Balanced BST
//       2
//     /  \
//   1     3 
// Explanation: all elements less than 2 are on the left side of 2 , and all the elements greater than 2 are on the right side

// Input: arr[] = {1, 2, 3, 4}
// Output: A Balanced BST
//           3
//         /  \
//        2    4
//       /
//     1

// Node Factory
const tNode = (data, left = null, right = null) => {
    return {
        data: data,
        left: left,
        right: right
    }
}

// Tree factory
const Tree = () => {

    const buildTree = (array, start, end) => {
        // If node is leaf return null
        if (start > end) return null;
        // Else assign mid and newNode as root
        const mid = Math.floor((start + end) / 2);
        let root = tNode(array[mid]);
        // Assign left and right pointers using recursive calls
        root.left = buildTree(array, start, mid - 1);
        root.right = buildTree(array, mid + 1, end);

        return root;
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    return {
        buildTree,
        prettyPrint,
    }
}

// Test
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const treeA = Tree();
// console.log(treeA);
// treeA.prettyPrint(treeA.buildTree(array, 0, array.length - 1));