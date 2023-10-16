// Given a sorted array. Write a function that creates a Balanced Binary Search Tree using array elements.

// EXAMPLE
// Input: arr[] = {1, 2, 3}
// Output: A Balanced BST
//       2
//     /  \
//  1     3 
// Explanation: all elements less than 2 are on the left side of 2 , and all the elements greater than 2 are on the right side

// Input: arr[] = {1, 2, 3, 4}
// Output: A Balanced BST
//           3
//         /  \
//      2    4
//    /
// 1


// PSEUDOCODE
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// Node Factory
const tNode = (data, left = null, right = null) => {
    return {
        data: data,
        left: left,
        right: right
    }
}

// Tree factory
const Tree = (array) => {

    const buildTree = (array, start, end) => {
        // If start > end return null
        // Assign mid
        // Assign new node as root
        // recusivly call buildTree(array, start, mid - 1) on left sub array & assign it to (Current) root.left
        // recusivly call buildTree(array, mid + 1, end) on right sub array & assign it to (Current) root.right

        // Return root
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