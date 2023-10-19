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

    let ROOT = null;

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

    const insert = (val, node) => {
        // Base Case
        if (node === null) return tNode(val);

        if (val < node.data) {
            node.left = insert(val, node.left); // Recursively insert in the left subtree and update the left pointer.
        } else if (val > node.data) {
            node.right = insert(val, node.right); // Recursively insert in the right subtree and update the right pointer.
        }

        return node; // This is required because if not the parents pointers would be updated with nothing, thus breaking the links.
    }

    return {
        buildTree,
        prettyPrint,
        insert,
        ROOT,
    }
}

// Test
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const treeA = Tree();
treeA.ROOT = treeA.buildTree(array, 0, array.length - 1);
treeA.prettyPrint(treeA.ROOT);
// console.log(treeA.ROOT.data);
treeA.insert(0, treeA.ROOT);
treeA.prettyPrint(treeA.ROOT);